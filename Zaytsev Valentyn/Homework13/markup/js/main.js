$(document).ready(function(){
    function maximumBlok (max){
        var maxBlok = 0;
        $.each(max,function(){
            if (maxBlok < $(this).height()){
                maxBlok = $(this).height()
            }
    });
        max.height(maxBlok)
    }
    maximumBlok($(".box"));
    maximumBlok($(".block"));

    //�������� ������ li ������� ul �������

    $('ul.list li:first-child').css('color', 'red');

    //��������� ������ ��������� ������

    $("ul.list li").each(function(index){
        if(index%2){
            $(this).prepend(++index);
        }
    });

        //�� ����� �� ������� ������ ��������� �� ���� ����� "active"

    $("ul.list li").on('click',function(){
        $(this).parent().find('li').removeClass('active');
        $(this).addClass("active")
    })

    //�������� ���� ����� �� ��������� ������ �� ����� �� Clean
    $("button.btn-clean").on('click',function(e){
        e.preventDefault();
        $('#form')[0].reset();
    })
});
