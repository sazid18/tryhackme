function sendIssue(_0x7417fb){const _0x5b1adf=document['querySelector']('#issue-details');const _0x1681b6=document['querySelector']('#issue-input');const _0x5f34e6=sanitiseHTML(_0x1681b6['value']);if(!_0x5f34e6){displayMessages('Uh-oh!','danger','Please\x20add\x20an\x20issue');}else{$['post']('/api/send-issue/'+_0x7417fb,{'code':_0x7417fb,'issue':_0x5f34e6},async function(_0x1947f){if(_0x1947f['success']){getIssuesManageRoom(_0x7417fb);displayMessages('Hooray!','success',_0x1947f['message']);_0x1681b6['value']='';}else{displayMessages('Uh-oh!','danger',_0x1947f['message']);}});}}function getIssues(_0x4c41fe){const _0x8a9f1f=document['querySelector']('#issue-details');$['get']('/api/get-issues/'+_0x4c41fe,{'code':_0x4c41fe},async function(_0x1b7483){if(_0x1b7483['success']){for(data of _0x1b7483['data']){let _0x152aef='danger';let _0x23128b=''+data['description'];if(data['status']==='resolved'){_0x152aef='success';}else if(data['status']==='in-progress'){_0x152aef='warning';}_0x8a9f1f['innerHTML']+='<div\x20class=\x22alert\x20alert-'+_0x152aef+'\x20mt-1\x20mb-0\x22>'+_0x23128b+'</div>';}}});}function getIssuesManageRoom(_0x1e0139){$['get']('/api/get-issues/'+_0x1e0139,{'code':_0x1e0139},async function(_0x4c9a7d){const _0x5bf79e=document['querySelector']('#issue-details');if(_0x4c9a7d['success']){_0x5bf79e['innerHTML']='';for(let _0x261da0 of _0x4c9a7d['data']){let _0x253b8d='danger';if(_0x261da0['status']=='resolved'){_0x253b8d='success';}else if(_0x261da0['status']=='in-progress'){_0x253b8d='warning';}let _0x2f7448=''+_0x261da0['description'];_0x5bf79e['innerHTML']+='<div\x20id=\x27resolve-'+_0x261da0['_id']+'\x27\x20class=\x27row\x20w-100\x20vertical-align-custom\x20mb-2\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-sm-8\x20w-100\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-'+_0x253b8d+'\x20w-100\x20desc-'+_0x261da0['_id']+'\x20m-0\x22>'+_0x2f7448+('</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-sm-4\x20text-center\x20w-100\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22outlined-button\x20success\x20text-success\x20w-100\x20hover-pointer\x22\x20onclick=\x22resolveIssue(\x27'+_0x1e0139+'\x27,\x20\x27'+_0x261da0['_id']+'\x27,\x20\x27resolved\x27)\x22>Resolve</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22outlined-button\x20warning\x20text-warning\x20w-100\x20hover-pointer\x22\x20onclick=\x22resolveIssue(\x27'+_0x1e0139+'\x27,\x20\x27'+_0x261da0['_id']+'\x27,\x20\x27in-progress\x27)\x22>In\x20Progress</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22outlined-button\x20danger\x20text-danger\x20w-100\x20hover-pointer\x22\x20onclick=\x22resolveIssue(\x27'+_0x1e0139+'\x27,\x20\x27'+_0x261da0['_id']+'\x27,\x20\x27delete\x27)\x22>Delete</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>');}if(_0x4c9a7d['data']['length']==0x0){_0x5bf79e['innerHTML']='There\x20are\x20no\x20reported\x20issues\x20to\x20deal\x20with.';}}else{_0x5bf79e['innerHTML']='Something\x20went\x20wrong,\x20please\x20try\x20again\x20later.';}});}function deleteElement(_0x43279c){let _0x29edc9=document['getElementById'](_0x43279c);return _0x29edc9['parentNode']['removeChild'](_0x29edc9);}function resolveIssue(_0x42d805,_0x56db3c,_0xa6ff45){$['post']('/api/resolve-issue',{'code':_0x42d805,'id':_0x56db3c,'status':_0xa6ff45},async function(_0x5863c6){if(_0x5863c6['success']){const _0x141726=_0x5863c6['data'][0x0];let _0x4e3a84='alert\x20alert-';if(_0x141726['status']=='resolved'){_0x4e3a84+='success';}else if(_0x141726['status']=='in-progress'){_0x4e3a84+='warning';}else{_0x4e3a84+='danger';}if(_0xa6ff45=='delete'){deleteElement('resolve-'+_0x56db3c);getIssuesManageRoom(_0x42d805);}else{document['querySelector']('.desc-'+_0x56db3c)['className']='desc-'+_0x56db3c+'\x20'+_0x4e3a84+'\x20m-0';}}else{displayMessages('Uh-oh!','danger','We\x27re\x20unable\x20to\x20change\x20the\x20issue\x20status,\x20please\x20try\x20again\x20later.');}});}function initIssuesClickModal(_0xd056ec){document['querySelector']('#known-issues')['addEventListener']('click',function(){modalTitle['innerHTML']='<div\x20class=\x22form-inline\x20createList\x20m\x20dynamic-add\x22\x20id=\x22create-lists-0\x22><i\x20class=\x22fas\x20fa-exclamation-triangle\x22></i>\x20Known\x20Issues';modalBody['innerHTML']='<p\x20class=\x22mb-0\x22>This\x20displays\x20any\x20known\x20issues\x20with\x20the\x20room.\x20Outstanding\x20issues\x20are\x20shown\x20in\x20red\x20while\x20resolved\x20issues\x20are\x20shown\x20in\x20green.</p><div\x20id=\x22issue-details\x22></div>';modalFooter['innerHTML']='';getIssues(_0xd056ec);$('#modal')['modal']('handleUpdate');$('#modal')['modal']('show');});}