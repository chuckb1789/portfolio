angular.module('beckApp')
      .controller('portfolioController', portfolioFunction)

// bootcamperController.$inject = ['bootcamperFact'];

portfolioFunction.$inject = ['$http'];

function portfolioFunction($http) {
    var portfolio = this;

    portfolio.title = "test!";

    portfolio.data = '';

    portfolio.signUp = function () {

          $http.post('/signUp', portfolio.data)
               .then(function success(response) {
                      console.log("Sent Email!");
                      portfolio.message = response.data;
                }
              )
              .catch(function(err){console.log("Update via put failed, caught error: ",err)})
    }
    protfolio.attribute = '';
    portfolio.attributes = ['Innovator', 'Web Developer', 'Climber', 'Accountant', 'Photographer'];

    portfolio.attributeScroll = () => {
      
    }

}
