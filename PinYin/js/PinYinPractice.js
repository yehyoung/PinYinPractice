/**
 * 聲母:CONSONANT
 * 韻母:VOWEL
 */
(function(){
var pinYinList = [{
        type: 'CONSONANT', // 聲母
        prefixBox: false,
        items: [{ item: 'ㄅ', pinyin: 'b' },
            { item: 'ㄆ', pinyin: 'p' },
            { item: 'ㄇ', pinyin: 'm' },
            { item: 'ㄈ', pinyin: 'f' },
            { item: 'ㄉ', pinyin: 'd' },
            { item: 'ㄊ', pinyin: 't' },
            { item: 'ㄋ', pinyin: 'n' },
            { item: 'ㄌ', pinyin: 'l' },
            { item: 'ㄍ', pinyin: 'g' },
            { item: 'ㄎ', pinyin: 'k' },
            { item: 'ㄏ', pinyin: 'h' },
            { item: 'ㄐ', pinyin: 'j' },
            { item: 'ㄑ', pinyin: 'q' },
            { item: 'ㄒ', pinyin: 'x' },
            { item: 'ㄓ', pinyin: 'zh' },
            { item: 'ㄔ', pinyin: 'ch' },
            { item: 'ㄕ', pinyin: 'sh' },
            { item: 'ㄖ', pinyin: 'r' },
            { item: 'ㄗ', pinyin: 'z' },
            { item: 'ㄘ', pinyin: 'c' },
            { item: 'ㄙ', pinyin: 's' }
        ]
    },
    {
        type: 'VOWEL1', // 韻母
        prefixBox: false,
        items: [{ item: 'ㄚ', pinyin: 'a' },
            { item: 'ㄛ', pinyin: 'o' },
            { item: 'ㄜ', pinyin: 'e' },
            { item: 'ㄝ', pinyin: 'e' },
            { item: 'ㄞ', pinyin: 'ai' },
            { item: 'ㄟ', pinyin: 'ei' },
            { item: 'ㄠ', pinyin: 'ao' },
            { item: 'ㄡ', pinyin: 'ou' },
            { item: 'ㄢ', pinyin: 'an' },
            { item: 'ㄣ', pinyin: 'en' },
            { item: 'ㄤ', pinyin: 'ang' },
            { item: 'ㄥ', pinyin: 'eng' },
            { item: 'ㄦ', pinyin: 'er' }
        ]
    },
    {
        type: 'i_VOWEL', // 韻母    前面有帶聲母
        prefixBox: true,
        items: [{ item: 'ㄧ', pinyin: 'i' },
            { item: 'ㄧㄚ', pinyin: 'ia' },
            { item: 'ㄧㄛ', pinyin: 'io' },
            { item: 'ㄧㄝ', pinyin: 'ie' },
            { item: 'ㄧㄠ', pinyin: 'iao' },
            { item: 'ㄧㄡ', pinyin: 'iu' },
            { item: 'ㄧㄢ', pinyin: 'ian' },
            { item: 'ㄧㄣ', pinyin: 'in' },
            { item: 'ㄧㄤ', pinyin: 'iang' },
            { item: 'ㄧㄥ', pinyin: 'ing' }
        ]
    },
    {
        type: 'y_VOWEL', // 韻母    前面沒帶聲母
        prefixBox: false,
        items: [{ item: 'ㄧ', pinyin: 'yi' },
            { item: 'ㄧㄚ', pinyin: 'ya' },
            { item: 'ㄧㄛ', pinyin: 'yo' },
            { item: 'ㄧㄝ', pinyin: 'ye' },
            { item: 'ㄧㄠ', pinyin: 'yao' },
            { item: 'ㄧㄡ', pinyin: 'you' },
            { item: 'ㄧㄢ', pinyin: 'yan' },
            { item: 'ㄧㄣ', pinyin: 'yen' },
            { item: 'ㄧㄤ', pinyin: 'yang' },
            { item: 'ㄧㄥ', pinyin: 'ying' }
        ]
    },
    {
        type: 'wu_VOWEL1', // 韻母    前面有帶聲母
        prefixBox: true,
        items: [{ item: 'ㄨ', pinyin: 'u' },
            { item: 'ㄨㄚ', pinyin: 'ua' },
            { item: 'ㄨㄛ', pinyin: 'uo' },
            { item: 'ㄨㄞ', pinyin: 'uai' },
            { item: 'ㄨㄟ', pinyin: 'ui' },
            { item: 'ㄨㄢ', pinyin: 'uan' },
            { item: 'ㄨㄣ', pinyin: 'un' },
            { item: 'ㄨㄤ', pinyin: 'uang' },
            { item: 'ㄨㄥ', pinyin: 'ong' }
        ]
    },
    {
        type: 'wu_VOWEL2', // 韻母    前面沒帶聲母
        prefixBox: false,
        items: [{ item: 'ㄨ', pinyin: 'wu' },
            { item: 'ㄨㄚ', pinyin: 'wa' },
            { item: 'ㄨㄛ', pinyin: 'wo' },
            { item: 'ㄨㄞ', pinyin: 'wai' },
            { item: 'ㄨㄟ', pinyin: 'wei' },
            { item: 'ㄨㄢ', pinyin: 'wan' },
            { item: 'ㄨㄣ', pinyin: 'wen' },
            { item: 'ㄨㄤ', pinyin: 'wang' },
            { item: 'ㄨㄥ', pinyin: 'weng' }
        ]
    },
    {
        type: 'u_VOWEL1', // 韻母    前面有帶聲母
        prefixBox: true,
        items: [{ item: 'ㄩ', pinyin: 'u' },
            { item: 'ㄩㄝ', pinyin: 'ue' },
            { item: 'ㄩㄢ', pinyin: 'uan' },
            { item: 'ㄩㄣ', pinyin: 'un' },
            { item: 'ㄩㄥ', pinyin: 'iong' }
        ]
    },
    {
        type: 'u_VOWEL2', // 韻母    前面沒帶聲母
        prefixBox: false,
        items: [{ item: 'ㄩ', pinyin: 'yu' },
            { item: 'ㄩㄝ', pinyin: 'yue' },
            { item: 'ㄩㄢ', pinyin: 'yuan' },
            { item: 'ㄩㄣ', pinyin: 'yun' },
            { item: 'ㄩㄥ', pinyin: 'young' }
        ]
    },
    {
        type: 'other_VOWEL2', // 韻母  中央法的特例
        prefixBox: false,
        items: [{ item: 'ㄋㄩ', pinyin: 'nv' },
            { item: 'ㄌㄩ', pinyin: 'lv' }
        ]
    }
];

var spaceKey = 32,
    enterKey = 13;

var testQuestionList = [];  // 要測驗的題庫
var curQuestionNumber = 0;  // 目前抽到的題目

/**
 * 依據勾選的選項，制作題庫
 */
var getSelectedOption = function(){
    testQuestionList = [];    // 清空舊的題庫
    $(".optionWrapper input:checkbox[name=practiceOption]:checked").each(function(){
        var theCase = pinYinList[$(this).val()];
        if(theCase.prefixBox == false) {   // 前面不需帶聲母
            testQuestionList = testQuestionList.concat(theCase.items);
        }else{
            var emptyBox = "<span class='emptyConsonant'></span>";
            for(var i = 0; i < theCase.items.length; i++){
                testQuestionList.push({item: emptyBox+theCase.items[i].item, pinyin: theCase.items[i].pinyin });
            }
        }        
    });
    console.log(testQuestionList);
};

/**
 * 隨機取得min~max間的整數亂數
 * @param {number} min 亂數的最小值
 * @param {number} max 亂數的最大值
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

/**
 * 練習模式，如果有打勾，則自動顯示答案
 */
var practiceModel = function(){
    if($(".optionWrapper input:checkbox[name=practiceOption]").prop("checked")){
        $('#answerTxt').prop('placeholder', testQuestionList[curQuestionNumber].pinyin);
    }
};

/**
 * 下一題，由題庫中亂數抽一題，並顯示
 */
var getNextQuestion = function(){
    if(testQuestionList.length > 0 ){
        $('#answerTxt').val('');
        curQuestionNumber = getRandomInt(1, testQuestionList.length-1);        
        $('.question').html(testQuestionList[curQuestionNumber].item);
        practiceModel();
    }else{
        console.log("testQuestionList.length = 0");
    }
};

var answerKeyHander = function(event){
    $( "#log" ).html( event.type + ": " +  event.which +  $("#answerTxt").val() + ', ' + event.keyCode + ', ' + String.fromCharCode(event.keyCode));  
    //var curAnswer = ($("#answerTxt").val() + String.fromCharCode(event.keyCode)).toLowerCase();
    var curAnswer = $("#answerTxt").val();
    if(curAnswer == testQuestionList[curQuestionNumber].pinyin){
        getNextQuestion();
        $('#log').html($("#answerTxt").val() + "=" + testQuestionList[curQuestionNumber].pinyin);
    }
    //$( "#log" ).html( event.type + ": " +  event.which );  
};

/**
 * 開始測驗
 */
var start = function(){
    console.log('startBtn click');
    getSelectedOption();
    getNextQuestion();
    $('#answerTxt').focus();
};

/**
 * 綁定按鈕事件
 */
$('#startBtn').click(start);                            // 開始
$('#nextQuestionBtn').click(getNextQuestion);           // 下一題
$('#answerTxt').blur(function(){                        // focus在answerTxt
    $(this).focus();
});
$( "#answerTxt" ).on( "keyup", answerKeyHander);      // 輸入答案

start();

}());
