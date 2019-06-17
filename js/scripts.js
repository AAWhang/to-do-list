function ChoreList() {
  this.toDoList = [],
  this.currentId = 0
}

ChoreList.prototype.addChore = function(toDo) {
  toDo.id = this.assignId();
  this.toDoList.push(toDo);
}

ChoreList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function toDo(chore, description) {
    this.chore = chore,
    this.description = description
}

var choores = new ChoreList();




$(document).ready(function(){



var listnum = 1;
    $("form#toDo").submit(function(event) {
      event.preventDefault();
      var chores = $("input#chores").val();
      var choreDescript = $("input#descriptions").val();
      var aChore = new toDo(chores, choreDescript);
      choores.addChore(aChore);
      var listId = choores.currentId - 1;
      $("#list-result").append("<li id='item" + listnum + "'>" + choores.currentId + "</li>");
      $("#list-result").append("<li id='item" + listnum + "'>" + choores.toDoList[listId].chore + "</li>");
      $("#list-result").append("<li id='item" + listnum + "'>" + choores.toDoList[listId].description + "</li>");
      $("#list-result").append("<input type='checkbox' id='search" + listnum + "' value ='" + listnum + "'> <p id='search" + listnum + "'>click if completed</p>");
      $("#list-result").append("<input type='button' class='clearing' id='search" + listnum + "' value ='" + listnum + "'> <p id='search" + listnum + "'>click to remove from list </p> <hr>");


      $("input").click(function() {
        if ($('#search' + this.value).is(":checked"))
          {
            $("li#item" + this.value).addClass("lineout");
          }

      $(".clearing").click(function() {
            $("li#item" + this.value).remove();
            $("input#search" + this.value).remove();
            $("p#search" + this.value).remove();
          });


          });
      listnum++;

    });


   });
