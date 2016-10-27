(function() {
  'use strict';

  var listEl = document.querySelector('#list');

  var books = [
    {title: 'Emma', year: 1815, author: 'Jane Austen'},
    {title: 'Jane Eyre', year: 1847, author: 'Charlotte Brontë'},
    {title: 'Wuthering Heights', year: 1847, author: 'Emily Brontë'},
  ];

  function appendListItem (text) {
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(text));
    listEl.appendChild(entry);
  }

  //================================
  // Your code here
  var i;
  for(i = 0; i < books.length; i++) {
    console.log(books[i]);
  }

    //appendListItem += books + "by" + books[i] + "(" + books[i] + ")";


  //================================

}());
