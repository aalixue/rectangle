$(function(){
    //get dom elem
    var $width = $('#width'),
        $height = $('#height'),
        $button = $('#calculate'),
        $perimeter = $('#perimeter'),
        $area = $('#area');
    /*calc button click event */
    $button.click(function(){
        //get value
        var w = Number($width.val()),
            h = Number($height.val());
        console.log(w,h);
        //calculate
        var p = 2 * (w + h);
        p = Math.round(p * Math.pow(10,2)) / Math.pow(10,2);
        var a = w * h;
        a = Math.round(a * Math.pow(10,2)) / Math.pow(10,2);
        //output
        $perimeter.val(p);
        $area.val(a);
    })
    /**
     * //get value

        //calculate

        //output
     * 
     */
})