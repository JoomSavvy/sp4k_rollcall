/**
 * Created by Ironman on 12/18/2015.
 */

angular.module( 'sp4k.rollcall.roster', [])

    .config(function config( $stateProvider ) {
    })

    .controller( 'RollcallRosterCtrl', function RollcallRosterController( $scope, $state, roster,rosterRestService ) {
        console.log($state);
        this.items = roster;
        this.product_id = $state.params.id;

        this.toggleAttendee = function(child_id,index){
            this.items[index].attending = !this.items[index].attending | 0;
            console.log(this.items[index]);
            rosterRestService.save({child_id:child_id,product_id:this.product_id,state:this.items[index].attending})
        }
    })
;