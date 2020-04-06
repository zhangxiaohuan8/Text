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
    var cfg = {
        container:'.note'
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
                    var menu=new Menu();
			        menu.show();
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