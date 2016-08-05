$(document).ready(function(){
    var requireStardust = [
        200,	400,	600,	800,	1000,
		1300,	1600,	1900,	2200,	2500,
		3000,	3500,	4000,	4500,	5000,
		6000,	7000,	8000,	9000,	10000
    ];
    
    var pokedex = [
        {name: 'フシギダネ', base: { stamina: 90, attack: 126, defense: 126 } },
        {name: 'フシギソウ', base: { stamina: 120, attack: 156, defense: 158 } },
        {name: 'フシギバナ', base: { stamina: 160, attack: 198, defense: 200 } },
        {name: 'ヒトカゲ', base: { stamina: 78, attack: 128, defense: 108 } },
        {name: 'リザード', base: { stamina: 116, attack: 160, defense: 140 } },
        {name: 'リザードン', base: { stamina: 156, attack: 212, defense: 182 } },
        {name: 'ゼニガメ', base: { stamina: 88, attack: 112, defense: 142 } },
        {name: 'カメール', base: { stamina: 118, attack: 144, defense: 176 } },
        {name: 'カメックス', base: { stamina: 158, attack: 186, defense: 222 } },
        {name: 'キャタピー', base: { stamina: 90, attack: 62, defense: 66 } },
        {name: 'トランセル', base: { stamina: 100, attack: 56, defense: 86 } },
        {name: 'バタフリー', base: { stamina: 120, attack: 144, defense: 144 } },
        {name: 'ビードル', base: { stamina: 80, attack: 68, defense: 64 } },
        {name: 'コクーン', base: { stamina: 90, attack: 62, defense: 82 } },
        {name: 'スピアー', base: { stamina: 130, attack: 144, defense: 130 } },
        {name: 'ポッポ', base: { stamina: 80, attack: 94, defense: 90 } },
        {name: 'ピジョン', base: { stamina: 126, attack: 126, defense: 122 } },
        {name: 'ピジョット', base: { stamina: 166, attack: 170, defense: 166 } },
        {name: 'コラッタ', base: { stamina: 60, attack: 92, defense: 86 } },
        {name: 'ラッタ', base: { stamina: 110, attack: 146, defense: 150 } },
        {name: 'オニスズメ', base: { stamina: 80, attack: 102, defense: 78 } },
        {name: 'オニドリル', base: { stamina: 130, attack: 168, defense: 146 } },
        {name: 'アーボ', base: { stamina: 70, attack: 112, defense: 112 } },
        {name: 'アーボック', base: { stamina: 120, attack: 166, defense: 166 } },
        {name: 'ピカチュウ', base: { stamina: 70, attack: 124, defense: 108 } },
        {name: 'ライチュウ', base: { stamina: 120, attack: 200, defense: 154 } },
        {name: 'サンド', base: { stamina: 100, attack: 90, defense: 114 } },
        {name: 'サンドパン', base: { stamina: 150, attack: 150, defense: 172 } },
        {name: 'ニドラン♀', base: { stamina: 110, attack: 100, defense: 104 } },
        {name: 'ニドリーナ', base: { stamina: 140, attack: 132, defense: 136 } },
        {name: 'ニドクイン', base: { stamina: 180, attack: 184, defense: 190 } },
        {name: 'ニドラン♂', base: { stamina: 92, attack: 110, defense: 94 } },
        {name: 'ニドリーノ', base: { stamina: 122, attack: 142, defense: 128 } },
        {name: 'ニドキング', base: { stamina: 162, attack: 204, defense: 170 } },
        {name: 'ピッピ', base: { stamina: 140, attack: 116, defense: 124 } },
        {name: 'ピクシー', base: { stamina: 190, attack: 178, defense: 178 } },
        {name: 'ロコン', base: { stamina: 76, attack: 106, defense: 118 } },
        {name: 'キュウコン', base: { stamina: 146, attack: 176, defense: 194 } },
        {name: 'プリン', base: { stamina: 230, attack: 98, defense: 54 } },
        {name: 'プクリン', base: { stamina: 280, attack: 168, defense: 108 } },
        {name: 'ズバット', base: { stamina: 80, attack: 88, defense: 90 } },
        {name: 'ゴルバット', base: { stamina: 150, attack: 164, defense: 164 } },
        {name: 'ナゾノクサ', base: { stamina: 90, attack: 134, defense: 130 } },
        {name: 'クサイハナ', base: { stamina: 120, attack: 162, defense: 158 } },
        {name: 'ラフレシア', base: { stamina: 150, attack: 202, defense: 190 } },
        {name: 'パラス', base: { stamina: 70, attack: 122, defense: 120 } },
        {name: 'パラセクト', base: { stamina: 120, attack: 162, defense: 170 } },
        {name: 'コンパン', base: { stamina: 120, attack: 108, defense: 118 } },
        {name: 'モルフォン', base: { stamina: 140, attack: 172, defense: 154 } },
        {name: 'ディグダ', base: { stamina: 20, attack: 108, defense: 86 } },
        {name: 'ダグトリオ', base: { stamina: 70, attack: 148, defense: 140 } },
        {name: 'ニャース', base: { stamina: 80, attack: 104, defense: 94 } },
        {name: 'ペルシアン', base: { stamina: 130, attack: 156, defense: 146 } },
        {name: 'コダック', base: { stamina: 100, attack: 132, defense: 112 } },
        {name: 'ゴルダック', base: { stamina: 160, attack: 194, defense: 176 } },
        {name: 'マンキー', base: { stamina: 80, attack: 122, defense: 96 } },
        {name: 'オコリザル', base: { stamina: 130, attack: 178, defense: 150 } },
        {name: 'ガーディ', base: { stamina: 110, attack: 156, defense: 110 } },
        {name: 'ウインディ', base: { stamina: 180, attack: 230, defense: 180 } },
        {name: 'ニョロモ', base: { stamina: 80, attack: 108, defense: 98 } },
        {name: 'ニョロゾ', base: { stamina: 130, attack: 132, defense: 132 } },
        {name: 'ニョロボン', base: { stamina: 180, attack: 180, defense: 202 } },
        {name: 'ケーシィ', base: { stamina: 50, attack: 110, defense: 76 } },
        {name: 'ユンゲラー', base: { stamina: 80, attack: 150, defense: 112 } },
        {name: 'フーディン', base: { stamina: 110, attack: 186, defense: 152 } },
        {name: 'ワンリキー', base: { stamina: 140, attack: 118, defense: 96 } },
        {name: 'ゴーリキー', base: { stamina: 160, attack: 154, defense: 144 } },
        {name: 'カイリキー', base: { stamina: 180, attack: 198, defense: 180 } },
        {name: 'マダツボミ', base: { stamina: 100, attack: 158, defense: 78 } },
        {name: 'ウツドン', base: { stamina: 130, attack: 190, defense: 110 } },
        {name: 'ウツボット', base: { stamina: 160, attack: 222, defense: 152 } },
        {name: 'メノクラゲ', base: { stamina: 80, attack: 106, defense: 136 } },
        {name: 'ドククラゲ', base: { stamina: 160, attack: 170, defense: 196 } },
        {name: 'イシツブテ', base: { stamina: 80, attack: 106, defense: 118 } },
        {name: 'ゴローン', base: { stamina: 110, attack: 142, defense: 156 } },
        {name: 'ゴローニャ', base: { stamina: 160, attack: 176, defense: 198 } },
        {name: 'ポニータ', base: { stamina: 100, attack: 168, defense: 138 } },
        {name: 'ギャロップ', base: { stamina: 130, attack: 200, defense: 170 } },
        {name: 'ヤドン', base: { stamina: 180, attack: 110, defense: 110 } },
        {name: 'ヤドラン', base: { stamina: 190, attack: 184, defense: 198 } },
        {name: 'コイル', base: { stamina: 50, attack: 128, defense: 138 } },
        {name: 'レアコイル', base: { stamina: 100, attack: 186, defense: 180 } },
        {name: 'カモネギ', base: { stamina: 104, attack: 138, defense: 132 } },
        {name: 'ドードー', base: { stamina: 70, attack: 126, defense: 96 } },
        {name: 'ドードリオ', base: { stamina: 120, attack: 182, defense: 150 } },
        {name: 'パウワウ', base: { stamina: 130, attack: 104, defense: 138 } },
        {name: 'ジュゴン', base: { stamina: 180, attack: 156, defense: 192 } },
        {name: 'ベトベター', base: { stamina: 160, attack: 124, defense: 110 } },
        {name: 'ベトベトン', base: { stamina: 210, attack: 180, defense: 188 } },
        {name: 'シェルダー', base: { stamina: 60, attack: 120, defense: 112 } },
        {name: 'パルシェン', base: { stamina: 100, attack: 196, defense: 196 } },
        {name: 'ゴース', base: { stamina: 60, attack: 136, defense: 82 } },
        {name: 'ゴースト', base: { stamina: 90, attack: 172, defense: 118 } },
        {name: 'ゲンガー', base: { stamina: 120, attack: 204, defense: 156 } },
        {name: 'イワーク', base: { stamina: 70, attack: 90, defense: 186 } },
        {name: 'スリープ', base: { stamina: 120, attack: 104, defense: 140 } },
        {name: 'スリーパー', base: { stamina: 170, attack: 162, defense: 196 } },
        {name: 'クラブ', base: { stamina: 60, attack: 116, defense: 110 } },
        {name: 'キングラー', base: { stamina: 110, attack: 178, defense: 168 } },
        {name: 'ビリリダマ', base: { stamina: 80, attack: 102, defense: 124 } },
        {name: 'マルマイン', base: { stamina: 120, attack: 150, defense: 174 } },
        {name: 'タマタマ', base: { stamina: 120, attack: 110, defense: 132 } },
        {name: 'ナッシー', base: { stamina: 190, attack: 232, defense: 164 } },
        {name: 'カラカラ', base: { stamina: 100, attack: 102, defense: 150 } },
        {name: 'ガラガラ', base: { stamina: 120, attack: 140, defense: 202 } },
        {name: 'サワムラー', base: { stamina: 100, attack: 148, defense: 172 } },
        {name: 'エビワラー', base: { stamina: 100, attack: 138, defense: 204 } },
        {name: 'ベロリンガ', base: { stamina: 180, attack: 126, defense: 160 } },
        {name: 'ドガース', base: { stamina: 80, attack: 136, defense: 142 } },
        {name: 'マタドガス', base: { stamina: 130, attack: 190, defense: 198 } },
        {name: 'サイホーン', base: { stamina: 160, attack: 110, defense: 116 } },
        {name: 'サイドン', base: { stamina: 210, attack: 166, defense: 160 } },
        {name: 'ラッキー', base: { stamina: 500, attack: 40, defense: 60 } },
        {name: 'モンジャラ', base: { stamina: 130, attack: 164, defense: 152 } },
        {name: 'ガルーラ', base: { stamina: 210, attack: 142, defense: 178 } },
        {name: 'タッツー', base: { stamina: 60, attack: 122, defense: 100 } },
        {name: 'シードラ', base: { stamina: 110, attack: 176, defense: 150 } },
        {name: 'トサキント', base: { stamina: 90, attack: 112, defense: 126 } },
        {name: 'アズマオウ', base: { stamina: 160, attack: 172, defense: 160 } },
        {name: 'ヒトデマン', base: { stamina: 60, attack: 130, defense: 128 } },
        {name: 'スターミー', base: { stamina: 120, attack: 194, defense: 192 } },
        {name: 'バリヤード', base: { stamina: 80, attack: 154, defense: 196 } },
        {name: 'ストライク', base: { stamina: 140, attack: 176, defense: 180 } },
        {name: 'ルージュラ', base: { stamina: 130, attack: 172, defense: 134 } },
        {name: 'エレブー', base: { stamina: 130, attack: 198, defense: 160 } },
        {name: 'ブーバー', base: { stamina: 130, attack: 214, defense: 158 } },
        {name: 'カイロス', base: { stamina: 130, attack: 184, defense: 186 } },
        {name: 'ケンタロス', base: { stamina: 150, attack: 148, defense: 184 } },
        {name: 'コイキング', base: { stamina: 40, attack: 42, defense: 84 } },
        {name: 'ギャラドス', base: { stamina: 190, attack: 192, defense: 196 } },
        {name: 'ラプラス', base: { stamina: 260, attack: 186, defense: 190 } },
        {name: 'メタモン', base: { stamina: 96, attack: 110, defense: 110 } },
        {name: 'イーブイ', base: { stamina: 110, attack: 114, defense: 128 } },
        {name: 'シャワーズ', base: { stamina: 260, attack: 186, defense: 168 } },
        {name: 'サンダース', base: { stamina: 130, attack: 192, defense: 174 } },
        {name: 'ブースター', base: { stamina: 130, attack: 238, defense: 178 } },
        {name: 'ポリゴン', base: { stamina: 130, attack: 156, defense: 158 } },
        {name: 'オムナイト', base: { stamina: 70, attack: 132, defense: 160 } },
        {name: 'オムスター', base: { stamina: 140, attack: 180, defense: 202 } },
        {name: 'カブト', base: { stamina: 60, attack: 148, defense: 142 } },
        {name: 'カブトプス', base: { stamina: 120, attack: 190, defense: 190 } },
        {name: 'プテラ', base: { stamina: 160, attack: 182, defense: 162 } },
        {name: 'カビゴン', base: { stamina: 320, attack: 180, defense: 180 } },
        {name: 'フリーザー', base: { stamina: 180, attack: 198, defense: 242 } },
        {name: 'サンダー', base: { stamina: 180, attack: 232, defense: 194 } },
        {name: 'ファイヤー', base: { stamina: 180, attack: 242, defense: 194 } },
        {name: 'ミニリュウ', base: { stamina: 82, attack: 128, defense: 110 } },
        {name: 'ハクリュー', base: { stamina: 122, attack: 170, defense: 152 } },
        {name: 'カイリュー', base: { stamina: 182, attack: 250, defense: 212 } },
        {name: 'ミュウツー', base: { stamina: 212, attack: 284, defense: 202 } },
        {name: 'ミュウ', base: { stamina: 200, attack: 220, defense: 220 } },
    ]
    var CPM = [
        0.094, 0.1351374, 0.1663979, 0.1926509, 0.2157325,
        0.2365727, 0.2557201, 0.2735304, 0.2902499, 0.3060574,
        0.3210876, 0.335445, 0.3492127, 0.3624578, 0.3752356,
        0.3875924, 0.3995673, 0.4111936, 0.4225, 0.4335117,
        0.4431076, 0.45306, 0.4627984, 0.4723361, 0.481685,
        0.4908558, 0.4998584, 0.5087018, 0.517394, 0.5259425,
        0.5343543, 0.5426358, 0.5507927, 0.5588306, 0.5667545,
        0.5745692, 0.5822789, 0.5898879, 0.5974, 0.6048188,
        0.6121573, 0.6194041, 0.6265671, 0.6336492, 0.640653,
        0.647581, 0.6544356, 0.6612193, 0.667934, 0.6745819,
        0.6811649, 0.6876849, 0.6941437, 0.7005429, 0.7068842,
        0.7131691, 0.7193991, 0.7255756, 0.7317, 0.734741,
        0.7377695, 0.7407856, 0.7437894, 0.7467812, 0.749761,
        0.7527291, 0.7556855, 0.7586304, 0.7615638, 0.7644861,
        0.7673972, 0.7702973, 0.7731865, 0.776065, 0.7789328,
        0.7817901, 0.784637, 0.7874736, 0.7903, 0.7931164
    ]

    var makeNames = function() {
        var names = []
        $.each(pokedex, function(idx, data) {
            names.push(data['name'])
        })
        return names;
    }
    $('#name').autocomplete({
        source: makeNames(),
        autoFocus: true,
        delay: 500,
        minLength: 2
    });
    var init = function() {
        var stardust = $('#stardust')
        for (var i = 0; i < requireStardust.length; i++) {
            stardust.append($("<option>").val(i).text(requireStardust[i]));
        }

        var selectName = $('#select-name');
        $.each(pokedex, function(idx, value) {
            var name = value['name'];
            selectName.append($("<option>").val(name).text(name));
        })
    }
    init();

    var getBaseStats = function(name) {
        var base = null
        $.each(pokedex, function(idx, data) {
            if (name == data['name'])
                base = data['base'];
        });
        return base
    }

    var getInput = function() {
        return {
            name: $('input[name="name"]').val(),
            cp: +$('input[name="cp"]').val(),
            hp: +$('input[name="hp"]').val(),
            stardustIndex: +$('#stardust').val()
        };
    }

    var sum = function(base, iv, type) {
        return base[type] + iv[type];
    }

    var getRangeText = function(ary) {
        var min = Math.min.apply(null, ary);
        var max = Math.max.apply(null, ary);
        if (min == max) {
            return String(min);
        } else {
            return min + "〜" + max;
        }
    }

    var calcCP = function(base, iv, cpm) {
        var cp = sum(base, iv, 'attack') * Math.pow(sum(base, iv, 'defense'), 0.5) * 
                    Math.pow(sum(base, iv, 'stamina'), 0.5) * Math.pow(cpm, 2) / 10
        return Math.max(10, Math.floor(cp))
    }

    var calcHP = function(base, iv, cpm) {
        return Math.max(10, Math.floor(sum(base, iv, 'stamina') * cpm));
    }

    var calcIV = function(result, level, input) {
        var base = getBaseStats(input.name);
        var curCP = input.cp;
        var curHP = input.hp;

        for(var s = 0; s < 16; s++) {
            var hp = calcHP(base, {stamina: s}, CPM[level]);
            if (hp != curHP) continue;

            for(var a = 0; a < 16; a++) {
                for(var d = 0; d < 16; d++) {
                    var iv = {stamina: s, attack: a, defense: d};
                    var cp = calcCP(base, iv, CPM[level]);
                    if (cp == curCP) {
                        result.push({level: level, attack: a, defense: d, stamina: s});
                    }
                }
            }
        }
    }

    var sameIVindexOf = function(ary, value) {
        var ret = -1;
        $.each(ary, function(idx, v) {
            if (v['attack'] == value['attack'] && 
                v['defense'] == value['defense'] && 
                v['stamina'] == value['stamina']) {
                    ret = idx;
                }
        })
        return ret;
    }

    var intersect = function(ary1, ary2) {
        var ret = [];
        $.each(ary1, function(idx, v) {
            if (sameIVindexOf(ary2, v) != -1) {
                ret.push(v);
            }
        })

        return ret;
    }
    
    var candIVs;

    var refineIV = function(input) {
        var level = input.stardustIndex * 4;
        var res = [];

        for(var i = 0; i < 4; i++) {
            calcIV(res, level + i, input);
        }
        if (candIVs == null) {
            candIVs = res;
        }
        else {
            candIVs = intersect(candIVs, res);
        }
    }

    var clearInputHistory = function() {
        $("#input-history").empty();
    }

    var renderInputHistory = function(input) {
        var $inputHistory = $("#input-history");

        var row = $("<tr></tr>");
        row.append("<td>" + input.cp + "</td>");
        row.append("<td>" + input.hp + "</td>");
        row.append("<td>" + requireStardust[input.stardustIndex] + "</td>");
        $inputHistory.append(row);
    }

    var renderCandIV = function() {
        var result = $("#result");
        result.empty();

        for(var i = 0; i < candIVs.length; i++) {
            var row = $("<tr></tr>");
            row.append("<td>" + (candIVs[i]['level'] / 2 + 1) + "</td>")
            row.append("<td>" + candIVs[i]['attack'] + "</td>")
            row.append("<td>" + candIVs[i]['defense'] + "</td>")
            row.append("<td>" + candIVs[i]['stamina'] + "</td>")
            result.append(row);
        }

        if (candIVs.length == 0) {
            $('#attention').text('個体値を計算できませんでした．CPとHPが10だと個体値の計算に失敗する場合があります．')
        }
        else {
            $('#attention').text('');
        }
    }

    var renderRangeIV = function() {
        var rangeResult = $("#rangeResult");

        rangeResult.empty();

        var result = {};
        var iter = {level: 'レベル', attack: '攻撃', defense: '防御', stamina: 'スタミナ'};

        $.each(iter, function(key, value) {
            result[key] = $.map(candIVs, function(v) {
                if (key == 'level') {
                    return v['level'] / 2 + 1;
                }
                else {
                    return v[key];
                }
            });
            rangeResult.append(makeRow(value, result[key]));
        });

        var mod = function(ary) {
            var str = getRangeText(ary);

            if (str.indexOf('〜') == -1) {
                return str;
            }
            else {
                return "[" + str + "]";
            } 
        }

        var textResult = "";
        textResult += $('input[name="name"]').val();
        textResult += "(" + getRangeText(result['level']) + "): "
        textResult +=  mod(result['attack']) + " - ";
        textResult +=  mod(result['defense']) + " - ";
        textResult +=  mod(result['stamina']);
        $("#text-result").val(textResult);
    }

    $('#calcCP').on('click', function() {
        candIVs = null;
        var input = getInput();
        clearInputHistory();

        refineIV(input);

        renderInputHistory(input);
        renderRangeIV();
        renderCandIV();
    })

    $('#refine').on('click', function() {
        var input = getInput();
        
        refineIV(input);

        renderInputHistory(input);
        renderRangeIV();
        renderCandIV();
    })

    $('#select-name').change(function() {
        $('input[name="name"]').val($(this).val());
    })

    var makeRow = function(label, cand) {
        var row = $("<tr></tr>");
        row.append("<td>" + label + "</td>");

        var min = Math.min.apply(null, cand);
        var max = Math.max.apply(null, cand);
        if (min == max) {
            row.append($("<td>" + getRangeText(cand) + "</td>"));
        } else {
            row.append($("<td>" + getRangeText(cand) + "</td>"));
        }
        return row;
    }
    var clipboard = new Clipboard('#copy-result');

    clipboard.on('success', function(e) {
        e.clearSelection();
    });
})