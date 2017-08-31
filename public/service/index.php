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
    'Piotr Okrój',
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

$projects = explode("\n", trim(`ls -1 data|sort`));
$authors = array_fill(0, count($projects), $creators);
$authors = array_combine($projects, $authors);

foreach ($output as $row) {
    $dir = preg_replace('/\D+$/', '', $row);
    list($null, $project, $branch, $version) = explode(DIRECTORY_SEPARATOR, $dir);
    $file = realpath($dir.DIRECTORY_SEPARATOR.'config.ini');
    $resp[$project.'-'.$branch]['project'] = $project;
    $resp[$project.'-'.$branch]['branch'] = $branch;
    $resp[$project.'-'.$branch]['versions'][] = [
        'number' => (int)$version,
        'createdAt' => date('Y-m-d H:i:s', filectime($file)),
        'createdBy' => $authors[$project][$version % count($authors[$project])],
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
            $createdBy = $authors[$project][$version];

            $dirname = implode(DIRECTORY_SEPARATOR, [__DIR__, 'data', $project, $branch, $version]);
            $result = mkdir($dirname, 0777, true);

            $filename = implode(DIRECTORY_SEPARATOR, [__DIR__, 'data', $project, $branch, $version, 'config.ini']);

            $headerFile = implode(DIRECTORY_SEPARATOR, [__DIR__, 'src', 'header.txt']);

            $header = file_get_contents($headerFile);
            $header = str_replace('__PROJECT__', $project, $header);
            $header = str_replace('__BRANCH__', $branch, $header);
            $header = str_replace('__VERSION__', $version, $header);
            $header = str_replace('__CREATED_AT__', date('Y-m-d H:i:s'), $header);
            $header = str_replace('__CREATED_BY__', $createdBy, $header);

            $content = file_get_contents("php://input");

            file_put_contents($filename, $header);
            file_put_contents($filename, $content, FILE_APPEND);
        }

        $filename = implode(DIRECTORY_SEPARATOR, [__DIR__, 'data', $project, $branch, $version, 'config.ini']);
        $filename = realpath($filename);

        $content = parse_ini_file($filename, true, INI_SCANNER_TYPED);

        $data = ($filename === false or $content === false) ? new \stdClass() : $content;
    }
}

if($format === 'ini') {
    header('Content-Type: text/plain');

    $attachment = sprintf('%s.%s', $download, $format);

    if($download !== null) {
        header(sprintf('Content-Disposition: attachment; filename="%s"', $attachment));
    }

    readfile($filename);
    exit;
}

echo json_encode($data, JSON_PRETTY_PRINT);
