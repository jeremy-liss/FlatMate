var test = require('tape')

var dateOrganiser = require('../../client/lib/eventDateOrganiser')

test('rearrange date', function(t){

  var expected = '21-04-2089'
  var result = dateOrganiser.dateOrganiser([{id: 6001, flat_id:1001, date:'2089-04-21', event:'graduation'}])
  t.equal(result[0].date, expected, 'returns organised date')
  t.end()
})
