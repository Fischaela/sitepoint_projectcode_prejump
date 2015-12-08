#pragma strict

public var Hero : GameObject;
private var halfScreenWidth : float;
private var	halfScreenHeight : float;

function Start () {
	halfScreenWidth = Screen.width / 2;
	halfScreenHeight = Screen.height / 2;
}

function Update () {
	var x : float = 0.0;
	var z : float = 0.0;

	x = ( Input.mousePosition.x - halfScreenWidth ) / halfScreenWidth;
	z = ( Input.mousePosition.y - halfScreenHeight ) / halfScreenHeight;
	
	Hero.GetComponent( HeroController ).SetPosition( x, z );
}