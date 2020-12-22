           function filter(e){
                      search = e.value.toLowerCase();
                      console.log(e.value)
                      document.querySelectorAll('.item_name').forEach(function(row){
                         text = row.innerText.toLowerCase();
                         if(text.match(search)){
                            row.style.display="block"
                         } else {
                            row.style.display="none"
                         }

                          // need to count hidden items and if all instances of .kb-items are hidden, then hide .kb-item
                         var countHidden = document.querySelectorAll(".item_name[style='display: none;']").length;

                          console.log(countHidden);
                      })
                    }
                  function detectParent()
                  {
                    var collectionref=document.querySelectorAll(".simpleCart_shelfItem");
                    collectionref.forEach(group=>{
                      var itemcollection=group.getElementsByClassName("item_name");
                      var hidecounter=0;
                      for(var j=0;j<itemcollection.length;j++)
                      {

                        if(itemcollection[j].style.display==='none')
                        {
                            hidecounter++;
                        }
                      }
                      if(hidecounter===itemcollection.length)
                      {
                        group.style.display="none";
                      }else{
                        group.style.display="block";
                      }

                    });
                  }