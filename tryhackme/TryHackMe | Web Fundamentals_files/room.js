function pendingAssessment(_0x58e731,_0x5ad13e){const _0x38c0fa=prettifyDate(_0x5ad13e['deadline']);const _0x398a72=_0x5ad13e['length'];const _0x118b5d=_0x5ad13e['id'];const _0x2fed4a=_0x5ad13e['company']['name'];const _0x41a064=_0x5ad13e['company']['imgs']?_0x5ad13e['company']['imgs']['large']:'';_0x58e731['innerHTML']='<section\x20class=\x22text-center\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20alt=\x22'+_0x2fed4a+'\x20logo\x22\x20src=\x22'+_0x41a064+'\x22\x20style=\x22width:\x20350px\x22></br>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://assets.tryhackme.com/img/screening/assessment-start.gif\x22\x20width=400>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Credit\x20to\x20Studio\x20Hakuna\x20on\x20Dribble\x20for\x20the\x20\x22code\x20freak\x22\x20art\x20-->\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><code><b>'+_0x2fed4a+'</b></code>\x20has\x20assigned\x20you\x20an\x20assessment\x20to\x20be\x20completed\x20by\x20<code><b>'+_0x38c0fa+'</b></code></p>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>You\x20will\x20have\x20<code><b>'+_0x398a72+'\x20hours</b></code>\x20to\x20complete\x20it\x20once\x20you\x20have\x20started</p>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22/screening/start-assessment/'+_0x118b5d+'\x22><button\x20type=\x22button\x22\x20class=\x22btn\x20btn-success\x20mt\x22>Start\x20Assessment</button></a>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</section>';}function assessmentCountdown(_0x3745ee,_0xc60d66,_0x5ae667){var _0x161e6b=new Date(_0x3745ee)['getTime']();var _0x105631=setInterval(function(){var _0x454f63=new Date()['getTime']();var _0x187d02=_0x161e6b-_0x454f63;var _0x15f0de=Math['floor'](_0x187d02/(0x3e8*0x3c*0x3c*0x18));var _0x426e7c=Math['floor'](_0x187d02%(0x3e8*0x3c*0x3c*0x18)/(0x3e8*0x3c*0x3c));var _0x5aaaeb=Math['floor'](_0x187d02%(0x3e8*0x3c*0x3c)/(0x3e8*0x3c));var _0x58ebde=Math['floor'](_0x187d02%(0x3e8*0x3c)/0x3e8);document['getElementById'](_0x5ae667)['innerHTML']=_0x15f0de+'d\x20'+_0x426e7c+'h\x20'+_0x5aaaeb+'m\x20'+_0x58ebde+'s\x20';let _0x3e0ea5=Math['round']((_0x454f63-new Date(_0xc60d66)['getTime']())/(new Date(_0x3745ee)['getTime']()-new Date(_0xc60d66)['getTime']())*0x64);const _0x13ce57=document['querySelector']('#assessment-countdown-perc');const _0x399b3c=_0x3e0ea5;let _0x28887f;if(_0x3e0ea5>0x55){_0x28887f='danger';}else if(_0x3e0ea5>0x3c){_0x28887f='warning';}else if(_0x3e0ea5>0x28){_0x28887f='primary';}else{_0x28887f='success';}if(_0x3e0ea5<0xf){_0x3e0ea5=0xf;}_0x13ce57['style']['width']=_0x3e0ea5+'%';_0x13ce57['textContent']=_0x399b3c+'%\x20of\x20your\x20time';_0x13ce57['className']='progress-bar\x20bg-'+_0x28887f;console['log']('Distance',_0x3e0ea5+'%');if(_0x187d02<0x0){clearInterval(_0x105631);window['location']['href']='/dashboard';}},0x3e8);}