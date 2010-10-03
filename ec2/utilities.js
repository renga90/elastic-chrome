////////////////////////////////////////////////////////////////////////////////
//
//  ElasticChrome
//
//  Copyright (c) 2010 Andrey Kurdiumov, All Rights Reserved
//  Maintainer: kant2002@gmail.com
//  Source code for this work could be obtained from: http://code.google.com/p/elastic-chrome
//  
//  License: GPL v3
// 
//  This file is part of ElasticChrome.
//  
//  ElasticChrome is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.
//  
//  ElasticChrome is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.
//  
//  You should have received a copy of the GNU General Public License
//  along with ElasticChrome.  If not, see <http://www.gnu.org/licenses/>.
// 
////////////////////////////////////////////////////////////////////////////////


function registerNamespace(namespaceName)
{
	var parts = namespaceName.split(".");
	var root = window;

	for(var i=0; i<parts.length; i++)
	{
		if(typeof root[parts[i]] == "undefined")
			root[parts[i]] = new Object();

		root = root[parts[i]];
	}
}


var protocolPortMap = {
    ssh : "22",
    rdp : "3389",
    http: "80",
    https: "443",
    pop3 : "110",
    imap : "143",
    spop : "995",
    simap : "993",
    dns : "53",
    mysql : "3306",
    mssql : "1433",
    smtp : "25",
    smtps : "465",
    ldap : "389"
};