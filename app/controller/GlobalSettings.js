Ext.define('motioncalc.controller.GlobalSettings', {
 extend : 'Ext.app.Controller',
 
 config: {
  stores : ['GlobalSettings'],
  models : ['GlobalSettings'],
//  refs: {
//   myEmployeeList: 'employeeList'
//  },
//  control: {
//   'employeeList': {
//    activate: 'onActivate',
//    itemtap: 'onSelectEmployee'
//   },
//   'container button[itemId=addEmployee]' : {
//    tap : 'onAddEmployee'
//   },
//   'employeeEdit button[itemId=save]' : {
//    tap : 'onSaveEmployee'
//   }
//  }  
// 
 },
 
 onActivate: function() {
  console.log('Main container is active');
 }
});