<?php

$data = new \stdClass();

if($_GET) {

    if(array_key_exists('/list', $_GET)) {
        $output = explode("\n", `ls -R data/*`);
        $output = array_filter($output);
        $output = array_values($output);

        $temp = [];

        $key = null;

        foreach($output as $row) {
            if(preg_match('/^data/', $row)) {
                $key = preg_replace('#^data/(\w+):$#', '$1', $row);
                $temp[$key] = [];
                continue;
            }
            $temp[$key][] = str_replace('config.ini.', '', $row);
        }

        $resp = [];

        foreach($temp as $project => $branches) {
            foreach($branches as $branch) {
                $resp[] = [
                    'project' => $project,
                    'branch' => $branch,
                ];
            }
        }

        $data = $resp;
    }
    else {
        $keys = array_keys($_GET);
        list($null, $service, $project, $branch) = explode('/', array_pop($keys));

        $path = implode(DIRECTORY_SEPARATOR, [__DIR__, 'data', $project]);
        $filename = sprintf('%s%sconfig.ini.%s', $path, DIRECTORY_SEPARATOR, $branch);

        $data = parse_ini_file($filename, true, INI_SCANNER_TYPED);

        if ($data === false) {
            $data = new \stdClass();
        }
    }
}


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 1000");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");

echo json_encode($data, JSON_PRETTY_PRINT);

exit;