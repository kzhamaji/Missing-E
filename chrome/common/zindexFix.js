/*
 * 'Missing e' Extension
 *
 * Copyright 2011, Jeremy Cutler
 * Released under the GPL version 3 licence.
 * SEE: GPL-LICENSE.txt
 *
 * This file is part of 'Missing e'.
 *
 * 'Missing e' is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * 'Missing e' is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with 'Missing e'. If not, see <http://www.gnu.org/licenses/>.
 */

function zindexFixEmbed(em) {
   var node = $(em).clone();
   node.attr('wmode','opaque').addClass('zindexfixed');
   $(em).replaceWith(node);
}

$('#posts li.post embed').each(function() {
   zindexFixEmbed(this);
});

document.addEventListener('DOMNodeInserted', function(e) {
   if (e.target.tagName === 'EMBED' &&
       !$(e.target).hasClass('zindexfixed')) {
      zindexFixEmbed(e.target);
   }
}, false);
