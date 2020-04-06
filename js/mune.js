function Menu(){
    var box=$(
        '<div class="size-box">'+
        '<div class="size-box-top">'+
            '<div class="ziti-top">'+
                '<p class="size-title">字体</p>'+
                '<span class="close" title="关闭">✖</span>'+
            '</div>'+
            '<div class="main">'+
                '<div class="font-family">'+
                    '<p>字体(F):</p>'+
                    '<div class="size-list-main" style="width: 150px;">'+
                        '<input class="editor" type="text" id="size-family" value="fangsong">'+
                        '<br>'+
                        '<ul class="size-list" id="family">'+
                            '<li class="item" style="font-family: cursive">cursive</li>'+
                            '<li class="item" style="font-family: fantasy;">fantasy</li>'+
                            '<li class="item selected" style="font-family: fangsong;">fangsong</li>'+
                        '</ul>'+
                    '</div>'+
                '</div>'+
                '<div class="font-style">'+
                    '<p>字形(Y):</p>'+
                    '<div class="size-list-main" style="width: 132px;">'+
                        '<input class="editor" type="text" id="size-style" value="常规"><br>'+
                        '<ul class="size-list" id="style">'+
                            '<li class="item selected" style="">常规</li>'+
                            '<li class="item" style="font-style: italic;">斜体</li>'+
                            '<li class="item" style="font-weight: bold;">粗体</li>'+
                            '<li class="item" style="font-weight: bold; font-style: italic;">粗偏斜体</li>'+
                        '</ul>'+
                    '</div>'+
                '</div>'+
                '<div class="font-size">'+
                    '<p>大小(S):</p>'+
                    '<div class="size-list-main" style="width: 64px;">'+
                        '<input class="editor" type="text" id="size-size" value="15"><br>'+
                        '<ul class="size-list" id="size">'+
                            '<li class="item">8</li>'+
                            '<li class="item">9</li>'+
                            '<li class="item">10</li>'+
                            '<li class="item">11</li>'+
                            '<li class="item">12</li>'+
                            '<li class="item">14</li>'+
                            '<li class="item">15</li>'+ 
                            '<li class="item selected">16</li>'+
                            '<li class="item">17</li>'+
                            '<li class="item">18</li>'+
                            '<li class="item">19</li>'+
                            '<li class="item">20</li>'+
                            '<li class="item">21</li>'+
                            '<li class="item">22</li>'+
                            '<li class="item">23</li>'+
                            '<li class="item">24</li>'+
                            '<li class="item">25</li>'+
                            '<li class="item">26</li>'+
                            '<li class="item">27</li>'+ 
                            '<li class="item">28</li>'+
                            '<li class="item">29</li>'+
                            '<li class="item">30</li>'+
                            '<li class="item">40</li>'+
                            '<li class="item">41</li>'+
                        '</ul>'+
                    '</div>'+
                '</div>'+
                '<fieldset class="sample">'+
                    '<legend>示例</legend>'+
                    '<p class="sample-txt" style="font-family: fangsong; font-size: 15px;">AaBbYyZz</p>'+
                '</fieldset>'+
                '<div class="script">'+
                    '<label>脚本(R):<br>'+
                        '<select>'+
                            '<option value="西欧语言">西欧语言</option>'+
                            '<option value="中文 GB2312">中文 GB2312</option>'+
                        '</select>'+
                    '</label>'+
                '</div>'+
                '<input class="btn-ok btn" type="button" value="确定">'+
                '<input class="btn-cancel btn" type="button" value="取消">'+
            '</div>'+
        '</div>'+
    '</div>'
    )
    var cfg = {
        container1:'body',
        style:["font-family: fangsong;","","font-size: 15px;"]
    };
    function Box(){
        $(cfg.container1).append(box);
        box.show();
        $('.close').click(function(){
            box.hide();
        })
        $('.btn-cancel').click(function(){
            box.hide();
        })
        $('.btn-ok').click(function(){
            box.hide();
        })
        $('ul#family').on("click",".item",function(){
            $('ul#family .item').removeClass('selected');
            $(this).addClass('selected');
            $('#size-family').val($(this).text())
            cfg.style[0]=$(this).context.attributes.style.value+";"
            $('.sample-txt').attr('style',cfg.style[0]+cfg.style[1]+cfg.style[2])
            console.log(cfg.style[0]+cfg.style[1]+cfg.style[2]);
        })
        $('ul#style').on("click",".item",function(){
            $('ul#style .item').removeClass('selected');
            $(this).addClass('selected');
            $('#size-style').val($(this).text())
            cfg.style[1]=$(this).context.attributes.style.value
            $('.sample-txt').attr('style',cfg.style[0]+cfg.style[1]+cfg.style[2])
            console.log(cfg.style[0]+cfg.style[1]+cfg.style[2]);
        })
        $('ul#size').on("click",".item",function(){
            $('ul#size .item').removeClass('selected');
            $(this).addClass('selected');
            $('#size-size').val($(this).text())
            cfg.style[2]="font-size:"+$(this).text()+'px'
            $('.sample-txt').attr('style',cfg.style[0]+cfg.style[1]+cfg.style[2])
            console.log(cfg.style[0]+cfg.style[1]+cfg.style[2]);

        })
    }
    this.show=function(){
        Box()
    }
}