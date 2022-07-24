$('#text-for-btn08').val(localStorage.getItem('btn08Text'));
$('#text-for-btn09').val(localStorage.getItem('btn09Text'));
$('#text-for-btn10').val(localStorage.getItem('btn10Text'));
$('#text-for-btn11').val(localStorage.getItem('btn11Text'));
$('#text-for-btn12').val(localStorage.getItem('btn12Text'));
$('#text-for-btn01').val(localStorage.getItem('btn01Text'));
$('#text-for-btn02').val(localStorage.getItem('btn02Text'));
$('#text-for-btn03').val(localStorage.getItem('btn03Text'));
$('#text-for-btn04').val(localStorage.getItem('btn04Text'));
$('#text-for-btn05').val(localStorage.getItem('btn05Text'));



$('.saveBtn').on('click', function(event){
    // for testing/setting up
    // console.log(idOfTextToSave);
    // console.log("the thing I typed: " + $(idOfTextToSave).val());

    event.preventDefault();
    var idOfTextToSave = '#text-for-'+this.id;
    var localStorageVariable = this.id + 'Text';
    localStorage.setItem(localStorageVariable, $(idOfTextToSave).val());
})
