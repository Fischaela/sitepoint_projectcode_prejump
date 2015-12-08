#pragma strict

public var Platform : GameObject;
public var Hero : GameObject;

private var boundary : float;
private var rotation: Quaternion;
private var lastPlatformPosition : Vector3;

function Start () {
	boundary = 1.0;
	rotation = Quaternion.identity;
	lastPlatformPosition = new Vector3( 0, 0, 0 );
}

function Update () {
	
	if ( Hero.transform.position.y > boundary ) {
		var position : Vector3;
		
		boundary += 1.0;
		position = getNextPlatformPosition();
		Instantiate( Platform, position, rotation );
	} else if (Hero.transform.position.y < -2.0) {
		gameOver();
	}
	
}

private function getNextPlatformPosition () {

	var position : Vector3;
	
	do {
		position = new Vector3( Random.Range( -1, 2 ), boundary, Random.Range( -1, 2 ) );
	}  while ( position.x == lastPlatformPosition.x && position.z == lastPlatformPosition.z );
	
	lastPlatformPosition = position;
	
	return position;
	
}

private function gameOver () {
	Application.LoadLevel( 'Menu' );
}