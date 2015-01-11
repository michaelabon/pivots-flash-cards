var your_location = "New York";
var your_pivots = users.filter(function(item) { return item.attributes.location_name === your_location } );
var questions = your_pivots.map(function(item) { var url = item.attributes.photo_url.replace(/^.*[\\\/]/, ''); return '<img src="' + url + '" /><br />Full name?;' + item.attributes.normalized_first_name + " " + item.attributes.normalized_last_name + '\n<img src="' + url + '" /><br />Role?;' + item.attributes.title } );
console.log(questions.join("\n"));

/*

Copyright (C) 2015 Mike Kenyon

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software Foundation,
Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301  USA

*/