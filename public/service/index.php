<?php
$version = null;
$format = null;
$filename = null;
$download = null;

$data = new \stdClass();
$output = explode("\n", `ls -R data/*`);
$output = array_filter($output, function ($e) {
    return preg_match('/\d+:$/', $e);
});
$output = array_values($output);

$resp = [];

$creators = [
    'Cezary Kraśniewski',
    'Łukasz Toporek',
    'Jacek Siciarek',
    'Dariusz Świeżyński',
    'Michał Kowalczyk',
    'Michał Kowalczyk',
    'Piotr Okrój',
    'Piotr Okrój',
    'Łukasz Toporek',
    'Michał Kowalczyk',
    'Maciej Rynkiewicz',
    'Maciej Rynkiewicz',
    'Karol Bachewicz',
    'Maciej Rynkiewicz',
    'Łukasz Toporek',
    'Łukasz Toporek',
    'Łukasz Toporek',
];

$c = 0;

foreach ($output as $row) {
    $dir = preg_replace('/\D+$/', '', $row);
    list($null, $project, $branch, $version) = explode(DIRECTORY_SEPARATOR, $dir);
    $file = realpath($dir.DIRECTORY_SEPARATOR.'config.ini');
    $resp[$project.'-'.$branch]['project'] = $project;
    $resp[$project.'-'.$branch]['branch'] = $branch;
    $resp[$project.'-'.$branch]['versions'][] = [
        'number' => (int)$version,
        'createdAt' => date('Y-m-d H:i:s', filectime($file)),
        'createdBy' => $creators[$c++ % count($creators)],
    ];
}

$srcdata = array_values($resp);

for($i = 0; $i < count($srcdata);$i++) {
    usort($srcdata[$i]['versions'], function ($a, $b) {
        return $b['number'] - $a['number'];
    });
}

$method = filter_input(INPUT_SERVER, 'REQUEST_METHOD');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 1000");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");

if ($_GET) {

    if (array_key_exists('/configuration', $_GET)) {
        $data = $srcdata;
    } else {
        $keys = array_keys($_GET);
        $rawpath = array_pop($keys);

        list($path, $format) = explode('_', $rawpath);

        list($null, $resource, $project, $branch, $version, $download) = explode('/', $path);

        if(preg_match('/^\d+$/', $version) === 0) {
            $download = $version;
            $version = null;
        }

        $data = array_filter($srcdata, function ($e) use ($project, $branch) {
            return $e['project'] === $project && $e['branch'] === $branch;
        });

        $data = array_values($data);
        $data = array_pop($data);

        if ($method === 'GET' and intval($version) > 0) {

            $versions = array_filter($data['versions'], function ($e) use ($version) {
                return $e['number'] === (int)$version;
            });

            $versions = array_values($versions);

            if (count($versions) > 0) {
                $ver = $versions[0];
                $data['versions'] = [$versions[0]];
            }
        }

        $temp = array_map(function ($e) {
            return $e['number'];
        }, $data['versions']);

        $version = max($temp);

        if ($method === 'POST') {
            $version++;

            $dirname = implode(DIRECTORY_SEPARATOR, [__DIR__, 'data', $project, $branch, $version]);
            $result = mkdir($dirname, 0777, true);

            $filename = implode(DIRECTORY_SEPARATOR, [__DIR__, 'data', $project, $branch, $version, 'config.ini']);

            $content = file_get_contents("php://input");
            file_put_contents($filename, $content);
        }

        $filename = implode(DIRECTORY_SEPARATOR, [__DIR__, 'data', $project, $branch, $version, 'config.ini']);
        $filename = realpath($filename);


        $content = parse_ini_file($filename, true, INI_SCANNER_TYPED);

        $data = ($filename === false or $content === false) ? new \stdClass() : $content;
    }
}

if($format === 'ini') {
    header('Content-Type: text/plain');
    if($download !== null) {
        header('Content-Disposition: attachment; filename="'.$download . '.' . $format .'"');
    }
    readfile($filename);
    exit;
}

echo json_encode($data, JSON_PRETTY_PRINT);
