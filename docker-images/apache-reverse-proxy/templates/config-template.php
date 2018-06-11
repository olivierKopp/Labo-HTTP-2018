<?php
	$static_addr = getenv('STATIC_ADDRESS');
	$dynamic_addr = getenv('DYNAMIC_ADDRESS');
?>

<VirtualHost *:80>
	ServerName demo.res.ch
	
	ProxyPass '/api/zoo/' 'http://<?php print "$dynamic_addr";?>/'
	ProxyPassReverse '/api/zoo/' '<?php print "$dynamic_addr";?>/'
	
	ProxyPass '/' 'http://172.17.0.2:80/'
	ProxyPassReverse '/' 'http://172.17.0.2:80/'
</VirtualHost>
