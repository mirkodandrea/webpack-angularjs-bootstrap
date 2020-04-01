import modal from 'angular-ui-bootstrap/src/modal';


class HomeCtrl {
  constructor($scope, $uibModal) {
    'ngInject';
    this.$uibModal = $uibModal;
    this.name = "AngularJS";
  }

  button(){
    console.log('button');

    this.$uibModal.open({
      template: `
      <div class="modal-header">
            <h3 class="modal-title" id="modal-title">I'm a modal!</h3>
        </div>
        <div class="modal-body" id="modal-body">
        modalbody
        </div>
        <div class="modal-footer">
        </div>
      `
    });
  }
}

export default HomeCtrl;