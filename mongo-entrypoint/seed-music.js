print('===============JAVASCRIPT===============');
print('Count of rows in music collection: ' + db.music.count());

db.music.insert({ myfield: 'test1', anotherfield: 'TEST1' });
db.music.insert({ myfield: 'test2', anotherfield: 'TEST2' });

print('===============AFTER JS INSERT==========');
print('Count of rows in music collection: ' + db.music.count());

allmusic = db.music.find();
while (allmusic.hasNext()) {
  printjson(allmusic.next());
}
