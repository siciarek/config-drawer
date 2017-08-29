<?php

$data = new \stdClass();

if ($_GET) {

    if (array_key_exists('/configuration', $_GET)) {
        $output = explode("\n", `ls -R data/*`);
        $output = array_filter($output);
        $output = array_values($output);

        $temp = [];

        $key = null;

        foreach ($output as $row) {
            if (preg_match('/^data/', $row)) {
                $key = preg_replace('#^data/(\w+):$#', '$1', $row);
                $temp[$key] = [];
                continue;
            }
            $temp[$key][] = str_replace('config.ini.', '', $row);
        }

        $resp = [];

        $x = [
            [
                [
                    'number' => 1,
                    'createdAt' => '2017-01-23 15:10:00',
                    'createdBy' => 'Cezary Kraśniewski',
                ],
                [
                    'number' => 2,
                    'createdAt' => '2017-01-27 12:19:03',
                    'createdBy' => 'Cezary Kraśniewski',
                ],
                [
                    'number' => 3,
                    'createdAt' => '2017-02-05 08:09:00',
                    'createdBy' => 'Cezary Kraśniewski',
                ],
                [
                    'number' => 4,
                    'createdAt' => '2017-04-17 10:32:00',
                    'createdBy' => 'Cezary Kraśniewski',
                ],
            ],
            [
                [
                    'number' => 1,
                    'createdAt' => '2017-01-23 15:10:00',
                    'createdBy' => 'Cezary Kraśniewski',
                ],
                [
                    'number' => 2,
                    'createdAt' => '2017-01-27 12:19:03',
                    'createdBy' => 'Kamil Urban',
                ],
                [
                    'number' => 3,
                    'createdAt' => '2017-02-05 08:09:00',
                    'createdBy' => 'Michał Kowalczyk',
                ],
                [
                    'number' => 4,
                    'createdAt' => '2017-04-17 10:32:00',
                    'createdBy' => 'Cezary Kraśniewski',
                ],
            ],
            [
                [
                    'number' => 1,
                    'createdAt' => '2017-01-23 15:10:00',
                    'createdBy' => 'Cezary Kraśniewski',
                ],
                [
                    'number' => 2,
                    'createdAt' => '2017-01-27 12:19:03',
                    'createdBy' => 'Łukasz Toporek',
                ],
                [
                    'number' => 8,
                    'createdAt' => '2017-02-05 08:09:00',
                    'createdBy' => 'Cezary Kraśniewski',
                ],
                [
                    'number' => 14,
                    'createdAt' => '2017-04-17 10:32:00',
                    'createdBy' => 'Jacek Siciarek',
                ],
                [
                    'number' => 21,
                    'createdAt' => '2017-05-17 10:32:00',
                    'createdBy' => 'Piotr Okrój',
                ],
                [
                    'number' => 33,
                    'createdAt' => '2017-08-11 12:32:00',
                    'createdBy' => 'Cezary Kraśniewski',
                ],
            ],
            [
                [
                    'number' => 4,
                    'createdAt' => '2017-04-17 10:32:00',
                    'createdBy' => 'Łukasz Toporek',
                ],
                [
                    'number' => 9,
                    'createdAt' => '2017-04-23 07:30:00',
                    'createdBy' => 'Maciej Rynkiewicz',
                ],
            ],
        ];

        $c = 0;

        foreach ($temp as $project => $branches) {
            foreach ($branches as $branch) {
                $versions = $x[$c++ % count($x)];
                rsort($versions);
                $resp[] = [
                    'project' => $project,
                    'branch' => $branch,
                    'versions' => $versions,
                ];
            }
        }

        $data = $resp;
    } else {
        $keys = array_keys($_GET);
        list($null, $resource, $project, $branch) = explode('/', array_pop($keys));

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