 #composer.json

    {
        "require": {
            "jonnyw/php-phantomjs": "4.*"
        },
        "config": {
            "bin-dir": "bin"
        },
        "scripts": {
            "post-install-cmd": [
                "PhantomInstaller\\Installer::installPhantomJS"
            ],
            "post-update-cmd": [
                "PhantomInstaller\\Installer::installPhantomJS"
            ]
        }
然后composer install 时候会出现phantomjs 可执行程序安装失败
处理方法 手动安装然后在执行的时候 定义路径 <?php
    
    use JonnyW\PhantomJs\Client;

    $client = Client::getInstance();
    $client->getEngine()->setPath('/path/to/phantomjs');


wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2
tar -jxvf 即可


