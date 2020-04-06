function Note(){
    var $note=$(
    '<ul class="note-title">'+
        '<li class="title" id="title0">文件(F)</li>'+
        '<li class="title" id="title1">编辑(E)</li>'+
        '<li class="title" id="title2">格式(O)</li>'+
        '<li class="title" id="title3">查看(V)</li>'+
        '<li class="title" id="title4">帮助(H)</li>'+
    '</ul>'+
    '<ul class="list" id="list0" style="left: 0px; display: none;">'+
        '<li class="list-item">'+
            '新建(N)'+
            '<span class="list-right">'+
               ' Ctrl+N'+
            '</span>'+
        '</li>'+
        '<li class="list-item">'+
            '打开(O)...'+
            '<span class="list-right">'+
                'Ctrl+O'+
            '</span>'+
        '</li>'+
        '<li class="list-item">'+
            '保存(S)'+
            '<span class="list-right">'+
                'Ctrl+S'+
            '</span>'+
        '</li>'+
        '<li class="list-item">'+
            '另存为(A)...'+
        '</li>'+
        '<li class="hr"></li>'+
        '<li class="list-item">'+
            '页面设置(U)...'+
        '</li>'+
        '<li class="list-item">'+
            '打印(P)...'+
            '<span class="list-right">'+
                'Ctrl+P'+
            '</span>'+
        '</li>'+
        '<li class="hr"></li>'+
        '<li class="list-item">'+
            '退出(X)'+
        '</li>'+
    '</ul>'+
    '<ul class="list" id="list1" style="left: 52px; display: none;">'+
        '<li class="list-item disabled">'+
           '撤销(U)'+
            '<span class="list-right">Ctrl+Z</span>'+
        '</li><li class="hr">'+
        '</li>'+
        '<li class="list-item">'+
            '剪切(T)'+
            '<span class="shortcut">Ctrl+X</span>'+
        '</li>'+
        '<li class="list-item disabled">'+
            '复制(C)<span class="list-right">Ctrl+C</span>'+
        '</li>'+
        '<li class="list-item disabled">'+
            '粘贴(P)'+
            '<span class="list-right">Ctrl+V</span>'+
        '</li>'+
        '<li class="list-item disabled">'+
            '删除(L)'+
            '<span class="list-right">Del</span>'+
        '</li><li class="hr"></li>'+
        '<li class="list-item">'+
            '使用 Bing 搜索...'+
            '<span class="list-right">Ctrl+E</span>'+
        '</li>'+
        '<li class="list-item disabled">'+
            '查找(F)...'+
            '<span class="list-right">Ctrl+F</span>'+
        '</li>'+
        '<li class="list-item disabled">'+
            '查找下一个(N)'+
            '<span class="list-right">F3</span>'+
        '</li>'+
        '<li class="list-item">'+
            '替换(R)...'+
            '<span class="list-right">Ctrl+H</span>'+
        '</li>'+
        '<li class="list-item">'+
            '转到(G)...'+
            '<span class="list-right">Ctrl+G</span>'+
        '</li>'+
        '<li class="hr"></li>'+
        '<li class="list-item">'+
            '全选(A)'+
            '<span class="list-right">Ctrl+A</span>'+
        '</li>'+
        '<li class="list-item">'+
            '时间/日期(D)'+
            '<span class="list-right">F5</span>'+
        '</li>'+
    '</ul>'+
    '<ul class="list" id="list2" style="left: 104px; display: none;">'+
        '<li class="list-item">'+
            '自动换行(W)'+
        '</li>'+
        '<li class="list-item size">'+
            '字体(F)...'+
        '</li>'+
    '</ul>'+
    '<ul class="list" id="list3" style="left: 156px; display: none;">'+
        '<li class="list-item">'+
            '状态栏(S)'+
        '</li>'+
    '</ul>'+
    '<ul class="list" id="list4" style="left: 208px; display: none;">'+
        '<li class="list-item">'+
            '查看帮助(H)'+
        '</li>'+
        '<li class="list-item">'+
            '关于记事本(A)'+
        '</li>'+
    '</ul>');
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
        container:'.note',
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
        $(cfg.container).append($note);
        var li=$('.title').length;
        for(var i=0; i<li; i++){
            (function(j){
                $('ul#list'+j).on("click",".list-item",function(){       
                    console.log($(this).text());
                });
                $('ul#list'+j).on("click",".size",function(){       
                    Box()
                });
                $('#title'+j).mouseover(function(){
                    $('#list'+j).attr('style',"display:block;left:"+j*52+"px");
                })
                $('#title'+j).mouseout(function(){
                    $('#list'+j).attr('style',"display:none");
                })
                $('#list'+j).mouseover(function(){
                    $('#list'+j).attr('style',"display:block;left:"+j*52+"px");
                })
                $('#list'+j).mouseout(function(){
                    $('#list'+j).attr('style',"display:none");
                })
            })(i)
        }
    }
}