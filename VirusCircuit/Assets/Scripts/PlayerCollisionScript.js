#pragma strict

var Shield : GameObject;
var collisionWBC : AudioClip;
var collisionNPC : AudioClip;
var collisionBVW : AudioClip;
var TargetCell : AudioClip;



function OnCollisionEnter (other : Collision) {
	
		
		for (var contact : ContactPoint in other.contacts){
		
		
		
			//Interact with White Blood Cell Collision
			if(other.gameObject.tag == "WBC"){
			
			if(contact.thisCollider.name == "Shield") {
			
			other.transform.position = Vector3(-10,0,0);
			Shield.transform.position = Vector3(-10,0,0);
			audio.PlayOneShot(collisionWBC);

			
			}else if(other.gameObject.tag == "NPC"){
			
			audio.PlayOneShot(collisionNPC);
			
			} else if(other.gameObject.tag == "BVW"){
			
			audio.PlayOneShot(collisionBVW);
			
			}else if(other.gameObject.tag == "TargetCell"){
			
			audio.PlayOneShot(TargetCell);
 		
		} 
		}
}
}