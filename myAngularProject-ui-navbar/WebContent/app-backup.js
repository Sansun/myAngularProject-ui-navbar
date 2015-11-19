'use strict';

angular.module('App', ['ui.bootstrap', 'ui.router', 'ui.navbar'])

    .config(function ($stateProvider, $urlRouterProvider) {

        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/home");

        // Now set up the states
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "partials/home.html"
            })
            .state('state1', {
                url: "/state1",
                templateUrl: "partials/state1.html"
            })
            .state('state2', {
                url: "/state2",
                templateUrl: "partials/state2.html"
            });
    })

      .controller('NavigationController', function ($scope) {

        $scope.tree = [{
            name: "Change Password",
            link: "#",
            subtree: [{
                name: "state 1",
                link: "state1"
            }, {
                name: "state 2",
                link: "state2",
                subtree: [{
                    name: "state unknown",
                    link: "state unknown 2",
                }]
            }]
        }, {
            name: "Security Awareness Training",
            link: "#",
            subtree: [{
                name: "no state connected",
                link: "#"
            }]
        }, {
            name: "divider",
            link: "#"

        }, {
            name: "Manage Accounts",
            link: "#"
        }, {
            name: "Manage Security Awareness Training",
            link: "#"
        }, {
            name: "divider",
            link: "#"
        }, {
            name: "Here again no state set up",
            link: "#"
        }];
		
		
		
		
		
		$scope.tree2 = [{
            name: "View",
            link: "#",
            subtree: [{
                name: "Current Role/Position Assignment",
                link: "state1"
            }, {
                name: "Access Request Status",
                link: "state2",
                subtree: [{
                    name: "state unknown",
                    link: "state unknown 2",
                }]
            }]
        }, {
            name: "Request Team Assignment",
            link: "#",
            subtree: [{
                name: "no state connected",
                link: "#"
            }]
        }, {
            name: "Review & Approve Team/Position",
            link: "#"

        }, {
            name: "Delegate Authority",
            link: "#"
        }, {
            name: "Delete Position/Role Assignments",
            link: "#"
        }, {
            name: "Lookup Team/Position/Role",
            link: "#"
        }];
		
		
		
		$scope.tree3 = [{
            name: "Manage Approving Authority",
            link: "#",
            subtree: [{
                name: "Update Approving Officials Authority",
                link: "state1"
            }, {
                name: "Transfer Approval Authority",
                link: "state2",
                subtree: [{
                    name: "state unknown",
                    link: "state unknown 2",
                }]
            }]
        }, {
            name: "Update non-FEMA Employee",
            link: "#",
            subtree: [{
                name: "no state connected",
                link: "#"
            }]
        }, {
            name: "Manage Access Controi",
            link: "#"

        }, {
            name: "Manage Positions",
            link: "#"
        }, {
            name: "Manage Teams",
            link: "#"
        }, {
            name: "Manage Modules",
            link: "#"
        }, {
            name: "Manage Properties",
            link: "#"
        }];
		
		
		$scope.tree4 = [{
            name: "Check against Org Mgmt",
            link: "#",
            subtree: [{
                name: "ERT Team against Org Mgmt",
                link: "state1"
            }, {
                name: "NACS Permanent Team Position against Org Mgmt",
                link: "state2",
                subtree: [{
                    name: "state unknown",
                    link: "state unknown 2",
                }]
            }]
        }, {
            name: "Check against NACS",
            link: "#",
            subtree: [{
                name: "Org Mgmt ERT Positions",
                link: "#"
            }, {
                name: "Org Mgmt Permanent Team",
                link: "#"
            }]
        }, {
            name: "divider",
            link: "#"

        }, {
            name: "Manage Disaster Teams",
            link: "#",
			subtree: [{
                name: "Activate Disaster Mgmt Team",
                link: "#"
            }, {
                name: "Reassign Team to another Homebase",
                link: "#"
            }, {
                name: "Change Team Description",
                link: "#"
            }]
        }, {
            name: "Manage Approving Authority",
            link: "#",
			subtree: [{
                name: "Update Approving Officials Authority",
                link: "#"
            }, {
                name: "Transfer Approval Authority",
                link: "#"
            }]
        }, {
            name: "divider",
            link: "#"
        }, {
            name: "Add Functional Positions to LTOR",
            link: "#"
        }, {
            name: "divider",
            link: "#"
        }, {
            name: "Update Org Mgmt",
            link: "#"
        }, {
            name: "Update non-FEMA Employee",
            link: "#"
        }, {
            name: "divider",
            link: "#"
        }, {
            name: "Manage Access Control",
            link: "#"
        }, {
            name: "Manage Positions",
            link: "#"
        }, {
            name: "Manage Teams",
            link: "#"
        }, {
            name: "Manage Modules",
            link: "#"
        }, {
            name: "Manage Properties",
            link: "#"
        }];
		
		
		
		
    });