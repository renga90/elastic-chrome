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

registerNamespace("ec2");

ec2.AccountManager = function()
{
	var prefs = JSON.parse(localStorage.prefs);
	
	this.accounts = prefs.accounts == null ? [] : prefs.accounts.list;
	
	this.save = function()
	{
		var prefs = JSON.parse(localStorage.prefs);
	    if (prefs.accounts == null)
	    {
	  	  prefs.accounts = { list: null };
	    }
	    prefs.accounts.list = this.accounts;
	    
	    localStorage.prefs = JSON.stringify(prefs);
	};
	
	this.add = function(name, access_key, secret_key)
	{
		for(i=0; i < this.accounts.length; i++)
		{
			var account = this.accounts[i];
			if (account.name == name)
			{
				throw "Account with same name already exists";
			}
		}
		this.accounts.push( { 
			name: name,
	  		access_key: access_key,
	  		secret_key: secret_key
	  	} );
	};
	this.update = function(name, access_key, secret_key)
	{
		for(i=0; i < this.accounts.length; i++)
		{
			var account = this.accounts[i];
			if (account.name == name)
			{
				account.access_key = access_key;
				account.secret_key = secret_key;
				return;
			}
		}
		throw "Account with given name doesnt exists";
	};
	this.remove = function(name)
	{
		for(i=0; i < this.accounts.length; i++)
		{
			var account = this.accounts[i];
			if (account.name == name)
			{
				this.accounts.splice(i,1);
				return;
			}
		}
	};
	this.rename = function(name, new_name)
	{
		for(i=0; i < this.accounts.length; i++)
		{
			var account = this.accounts[i];
			if (account.name == name)
			{
				account.name = new_name;
				return;
			}
		}

		throw new "Account with given name doesnt exists";
	};
	this.get = function(name)
	{
		for(i=0; i < this.accounts.length; i++)
		{
			var account = this.accounts[i];
			if (account.name == name)
			{
				return account;
			}
		}

		throw "Account with given name doesnt exists";
	};		
};
