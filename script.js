document.getElementById('yes').addEventListener('click', function() {
    document.getElementById('cartoon').src = 'images/dog1.gif'; /* เปลี่ยนรูปเมื่อคลิก yes */
    document.getElementById('text').textContent = 'รักแฟนนนน'; /* เปลี่ยนข้อความเมื่อคลิก yes */

  });
  
  document.getElementById('no').addEventListener('click', function() {
    document.getElementById('cartoon').src = 'images/dog2.gif'; /* เปลี่ยนรูปเมื่อคลิก no */
    document.getElementById('text').textContent = 'โป้งแล้วว'; /* เปลี่ยนข้อความเมื่อคลิก yes */

  });
