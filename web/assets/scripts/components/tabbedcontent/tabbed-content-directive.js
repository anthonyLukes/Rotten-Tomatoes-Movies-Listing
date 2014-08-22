app.directive('tabbedContentDirective', function() {
    return {
        restrict: "A",
        scope: {
            items: "="
        },
        templateUrl: "assets/scripts/components/tabbedcontent/tabbed-content-template.html",
        controller: function() {
            this.activeTab = 1;

            this.setCurrentTab = function(tabNumber) {
                this.activeTab = tabNumber;
            };

            this.isTabActive = function(tabNumber) {
                return tabNumber === this.activeTab;
            }
        },
        controllerAs: 'tab'
    }
});