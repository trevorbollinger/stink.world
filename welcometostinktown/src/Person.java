import java.util.Random;
import java.util.Scanner;

public class Person {
    Random rand = new Random();
    Scanner input = new Scanner(System.in);

    private String name;
    private boolean alive = true;
    private int shitUrge = 0 + rand.nextInt(75);
    private int health = 100;
    private String location = "square";
    private int money = 1000;


    public int shitIncrementer = 5;
    public double luck = 1.0;

    public Person(String n){
        this.name = n;
    }

    public String getName(){
        return this.name;
    }

    public boolean getAlive(){
        return this.alive;
    }

    public int getMoney(){
        return this.money;
    }

    public void kiss(Person target){
        System.out.println(this.name + " has kissed " + target.name);
    }

    public void piss(){

        System.out.println("Where would you like to piss?");
        String pissLoc = input.next();

        System.out.println("In what position would you like to piss?");
        String pissPos = input.next();

    }

    //LOCATION
    public String getLoc(){
        if (this.location.equals("square")) {
            return "Town Square";
        } else if(this.location.toLowerCase().equals("applebees")) {
            return "Applebees";
        } else if(this.location.toLowerCase().equals("applebeesbathroom")) {
            return "Applebees Bathroom";
        } else if(this.location.toLowerCase().equals("forklift")) {
            return "Forklift Arena";
        } else if(this.location.toLowerCase().equals("mason")) {
            return "Mason's House";
        } else if(this.location.toLowerCase().equals("smashburger")) {
            return "SmashBurger";
        } else if(this.location.toLowerCase().equals("target")) {
            return "Target";
        } else {
            return "none";
        }
    }
    public String getAreaName() {
        return this.location;
    }

    public void move(String location){
        if(location.equals("applebeesbathroom")){
            if(this.location.equals("applebees")){
                this.location = location;
            } else {
                System.out.println(this.name + " isn't at the applebees!");
            }
        } else {
            this.location = location;
        }

    }

    //HEALTH
    public int getHealth(){
        return this.health;
    }

    public void setHealth(int h){
        this.health = h;
    }

    //SHIT
    public int getShitUrge(){
        return this.shitUrge;
    }

    public void increaseShitUrge(){
        this.shitUrge += this.shitIncrementer*stinktown.randDouble(0.8,1.2);
    }

    public void resetShitUurge(){
        this.shitUrge = 0 - this.shitIncrementer;
    }

    public void shit(String location){
        if(shitUrge > 0){
            String shitLoc = location;

            if(shitLoc.toLowerCase().equals("toilet") && this.location.toLowerCase().equals("applebeesbathroom")) {
                double rng = rand.nextDouble() * 100;
                if (shitUrge > 50) {
                    if (rng > 95) {
                        System.out.println(this.name + " attempted to sit on the toilet and missed. They are now sitting on the ground and they still need to shit themselves.");
                    } else {
                        System.out.println(this.name + " took a big ole dump in the toilet. They longer feel an urge to shit.");
                        this.resetShitUurge();
                    }
                } else {
                    System.out.println(this.name + " took a pequeno shit. They no longer feel an urge to shit.");
                    this.resetShitUurge();
                }

            } else if(shitLoc.toLowerCase().equals("toilet")){
                System.out.println(this.name + " isn't in a bathroom!");
            } else if(shitLoc.toLowerCase().equals("tub")) {

            } else if(shitLoc.toLowerCase().equals("bed")) {
            } else if(shitLoc.toLowerCase().equals("pants")) {
                double rng = rand.nextDouble()*100;
                if(shitUrge < 25){
                    System.out.println(this.name + " starts to feel something wet running down their leg. They realize they've shit their pants.");
                    this.resetShitUurge();
                } else if(shitUrge >= 25 && shitUrge <60){
                    System.out.println(this.name + " 's asshole deposits a log in their pants. The room beings to smell.");
                    this.resetShitUurge();
                } else if(shitUrge >= 60 && shitUrge <85){
                    System.out.println(this.name + " begins groaning as a dense turd falls out of their butthole. Everybody in the room watched.");
                    this.resetShitUurge();
                } else {
                    System.out.println("Very suddenly, a rocket of shit flies out of " + this.name + "'s ass. Their pants shoot to the ground. The surrounding damage is catastrophic.");
                    this.resetShitUurge();
                }
            } else if(shitLoc.toLowerCase().equals("friend's mouth")) {
            } else if(shitLoc.toLowerCase().equals("nathan's car")) {
            } else if(shitLoc.toLowerCase().equals("applebee's bathroom")) {
            } else if(shitLoc.toLowerCase().equals("own ass")) {
            } else if(shitLoc.toLowerCase().equals("")) {
            }


        } else {
            System.out.println(this.name + " feels no urge to shit");
        }

    }

    public void death(){
        System.out.println(this.getName() + " has perished.");
        this.alive = false;
        this.shitUrge = -999999999;
        this.shitIncrementer = 0;
        this.setHealth(0);
        this.location = "hell";
    }


}