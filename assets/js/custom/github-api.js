/**
 * Integration for the Github API.
 * @file
 *
 * The idea would be for this class to return an object that can easily be
 * rendered in a template file. The object would have properties for "projects"
 * and "members", initially.
 */

var githubData = (function () {

  // Declare variables for hoisting.
  var path, verb, projects, rtdat;

  // API URL will most likely have the "orgs/CodeForBoulder/" suffix so that is why it is added here.
  var githubApiUrl = 'https://api.github.com/orgs/CodeForBoulder/';

  apiRequest = function(path) {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = processRequest;
    httpRequest.open('GET', path);
    httpRequest.send();

    return httpRequest.responseText;
  };

  processRequest = function() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        //console.log(httpRequest.responseText);
      } else {
        console.log('There was a problem with the request.');
      }
    }
  };

  // Expose these functions via an interface while hiding
  // the implementation of the module within the function() block

  return {
    getProjects: function() {
      console.log(githubApiUrl);
      projects = apiRequest(githubApiUrl + 'repos');

      console.log(projects);
      projects.forEach(function (item, index, array) {
        //console.log(item.name);
        //console.log(item.description);
      });

    },

    getUsers: function() {

      return 'You failed times.';
    }
  }
})();

var projects = document.getElementById('CFBProjects');
console.log(projects);
console.log(githubData.getProjects());
projects.innerHTML = projects.innerHTML + githubData.getProjects();
