function Unit(hp,dmg,name)
{
	this.hp = hp;
	this.chp = hp;
	this.dmg = dmg;
	this.name = name;
}

Unit.prototype.callName = function(){alert('Я '+this.name+'рррррррр');};
Unit.prototype.die = function(){alert(this.name+' помер!');};
Unit.prototype.hit = function(obj)
{
	if(this.dmg > obj.chp)
	{
		obj.chp = 0;
		obj.die();
	} else
	{
		obj.chp -= this.dmg;
	}
};

function CatMonster()
{
	Unit.call(this, 50, 5, 'Котомонстр');
}
CatMonster.prototype = Object.create(Unit.prototype);

function BirdMonster()
{
	Unit.call(this, 60, 3, 'Птахомонстр');
}
BirdMonster.prototype = Object.create(Unit.prototype);

var bird = new BirdMonster();
var cat = new CatMonster();

bird.hit(cat);
cat.hit(bird);

bird.callName();
cat.callName();

bird.die();
cat.die();