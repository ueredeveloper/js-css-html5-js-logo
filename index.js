/** 
*
*
*
*
*/
function onRange(id, de_id, attr, value) {
  console.log(id, de_id, attr, value)
  
  document.getElementById(`${id}`).style[attr] = `${value}px`;
  document.getElementById(`${de_id}`).innerHTML = `${value}px`;
}
let _elem= document.getElementById('shield')

//let _style = getComputedStyle(_elem)

//console.log(_elem, _style.length)

function getCSS(element) {
 
            var css_data = '';
            var css_obj = getComputedStyle(element);
          
            for (var i = 0; i < css_obj.length; i++) {
                css_data +=
                    css_obj[i] + ':' + 
                    css_obj.getPropertyValue(css_obj[i])
                    + ';<br>';
            }
            document.getElementById('css_id')
                    .innerHTML = css_data;
            return;
        }
getCSS(_elem)
