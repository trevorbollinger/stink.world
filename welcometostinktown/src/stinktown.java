import java.util.*;

public class stinktown {
    static Random rand = new Random();
    static Scanner input = new Scanner(System.in);

    static Person nathan = new Person("Nathan");
    static Person trevor = new Person("Trevor");
    static Person audra = new Person("Audra");
    static Person jared = new Person("Jared");
    static Person jerika = new Person("Jerika");
    static Person gabe = new Person("Gabe");
    static Person aj = new Person("AJ");
    static Person brenna = new Person("Brenna");
    static Person jace = new Person("Jace");
    static Person mason = new Person("Mason");
    static Person logan = new Person("Logan");
    static Person james = new Person("James");

    static boolean running = true;
    static int inRoom = 0;

    static Person [] people = {trevor, nathan, audra, jared, jerika, gabe, aj, brenna, jace, mason, logan, james};
    static String [] locations = {"square", "applebees", "applebeesbathroom", "forklift", "mason", "smashburger"};

    static Person controlling = people[rand.nextInt(people.length)];

    public static void main(String[] args) {
        System.out.println("\nWelcome to Stinktown! Please enter input exactly as it is spelled in the list of\n" +
                           "options. Capitalize the first letter of names, too!");

        while(running = true){
            inRoom = 0;

            //stat updates
            for (Person value : people) {
                value.increaseShitUrge();
            }

            System.out.println("\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
            System.out.println("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~welcome to stinktown~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
            System.out.println("~~~~~~~~~~~~~~~~~~~~~~~~You are currently controlling: " + controlling.getName()+ "~~~~~~~~~~~~~~~~~~~~~~~~");
            System.out.println("~~~~~~~~~~~~~~~~~~~~~~~~~Urge to shit: " + controlling.getShitUrge() + "% ~~~~~ Health: " + controlling.getHealth() + "~~~~~~~~~~~~~~~~~~~~~~~~~");
            System.out.println("~~~~~~~~~~~~~~~~~~~~~Location: " + controlling.getLoc() + " ~~~~~~ " + "Money: " + controlling.getMoney() + "~~~~~~~~~~~~~~~~~~~~~~~");
            System.out.println("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
            System.out.println("People in the same area as " + controlling.getName() + ": " );
            System.out.print("--");
            for(int i = 0; i < people.length; i++){
                if(people[i].getAreaName().equals(controlling.getAreaName())){
                    if(!people[i].getName().equals(controlling.getName())){
                        if(people[i].getAlive() == true){
                            System.out.print(people[i].getName() + ", ");
                            inRoom++;
                        }
                    }
                }
            }
            if(inRoom == 0){
                System.out.println("nobody");
            }

            System.out.println("\n\nActions: ");
            System.out.println("--shit: shit!");
            System.out.println("--kiss: kiss another person");
            System.out.println("--kill: kill another person");
            if(controlling.getAreaName().equals("square")){
//                System.out.println("--linger: hang out at the town square and wait for something to happen");
            } else if(controlling.getAreaName().equals("applebees")){
//                System.out.println("--orderfood: order some food!");
//                System.out.println("--orderdrink: order a drink");
//                System.out.println("--work: work a shift at applebees");
            } else if(controlling.getAreaName().equals("applebeesbathroom")){

            } else if(controlling.getAreaName().equals("forklift")){
                System.out.println("--play: Play a round of forklift combat!");
            } else if(controlling.getAreaName().equals("mason")){
//                System.out.println("--play: Play a round of 'Don't break your knuckles!'");
            } else if(controlling.getAreaName().equals("smashburger")){
//                System.out.println("order: order a milkshake for yourself");
//                System.out.println("smash: smash burger.");
//                System.out.println("work: work a shift at smashburger");
            } else if(controlling.getAreaName().equals("target")){
//                System.out.println("shop: buy some shit");
            }
            System.out.println("--move: move to a different area of the map");
            System.out.println("--switch: switch to a different person");
            System.out.println(" ");



            //STAT BASED EVENTS MUST HAPPEN HERE
            for (Person person : people) {
                if (person.getShitUrge() >= 80 && person.getShitUrge() < 100) {
                    System.out.println(person.getName() + " is about to shit their pants! Get them to a toilet, quick! Urge to Shit: " + person.getShitUrge() + "%");
                }

                if (person.getShitUrge() >= 100) {
                    person.setHealth(0);
                    System.out.println("Oh no! " + person.getName() + " has shit their pants and died!");
                    kill(person);
                }
            }

            System.out.println(" ");
            System.out.println("====================================================================================");
            String action = input.next();
            System.out.println(" ");

            if(action.equals("shit")){
                System.out.println("Where would you like " + controlling.getName() + " to shit?");
                action = input.next();
                System.out.println(" ");
                controlling.shit(action);
            } else if(action.toLowerCase().equals("switch")){
                System.out.println("Who would you like to switch to?");
                action = input.next();
                System.out.println(" ");

                for (Person person : people) {
                    if (person.getHealth() > 0) {
                        if (action.equals(person.getName())) {
                            controlling = person;
                        }
                    } else {
                        System.out.println(person.getName() + " is dead and you cannot switch to them.");
                    }

                }
            } else if(action.toLowerCase().equals("kiss")){
                System.out.println("Who would you like " + controlling.getName() + " to kiss?");
                action = input.next();
                System.out.println(" ");
                for (Person person : people) {
                    if (action.equals(person.getName())) {
                        if(person.getAreaName().equals(controlling.getAreaName())){
                            System.out.println(controlling.getName() + " has kissed " + person.getName());
                        } else {
                            System.out.println(person.getName() + " is not in the same room as " + controlling.getName()+"!");
                        }
                    }
                }

            } else if(action.toLowerCase().equals("move")) {
                if(controlling.getAreaName().equals("square")){
                    System.out.println("Move to where?");
                    System.out.println("Options: applebees, forklift, mason, smashburger, target");
                    action = input.next();
                    System.out.println(" ");
                    if(action.toLowerCase().equals("applebees") || action.toLowerCase().equals("forklift")|| action.toLowerCase().equals("mason")|| action.toLowerCase().equals("smashburger")|| action.toLowerCase().equals("target"))
                        controlling.move(action.toLowerCase());
                    else
                        System.out.println("Invalid input, dumbass!");
                } else if(controlling.getAreaName().equals("applebees")){
                    System.out.println("Move to where?");
                    System.out.println("Options: applebeesbathroom, square");
                    action = input.next();
                    System.out.println(" ");
                    if(action.toLowerCase().equals("applebeesbathroom") || action.toLowerCase().equals("square"))
                        controlling.move(action.toLowerCase());
                    else
                        System.out.println("Invalid input, dumbass!");
                } else if(controlling.getAreaName().equals("applebeesbathroom")){
                    System.out.println("Move to where?");
                    System.out.println("Options: applebees");
                    action = input.next();
                    System.out.println(" ");
                    if(action.toLowerCase().equals("applebees"))
                        controlling.move(action.toLowerCase());
                    else
                        System.out.println("Invalid input, dumbass!");
                } else if(controlling.getAreaName().equals("forklift")){
                    System.out.println("Move to where?");
                    System.out.println("Options: square");
                    action = input.next();
                    System.out.println(" ");
                    if(action.toLowerCase().equals("square"))
                        controlling.move(action.toLowerCase());
                    else
                        System.out.println("Invalid input, dumbass!");
                } else if(controlling.getAreaName().equals("mason")){
                    System.out.println("Move to where?");
                    System.out.println("Options: square");
                    action = input.next();
                    System.out.println(" ");
                    if(action.toLowerCase().equals("square"))
                        controlling.move(action.toLowerCase());
                    else
                        System.out.println("Invalid input, dumbass!");
                } else if(controlling.getAreaName().equals("smashburger")){
                    System.out.println("Move to where?");
                    System.out.println("Options: square");
                    action = input.next();
                    System.out.println(" ");
                    if(action.toLowerCase().equals("square"))
                        controlling.move(action.toLowerCase());
                    else
                        System.out.println("Invalid input, dumbass!");
                } else if(controlling.getAreaName().equals("target")){
                    System.out.println("Move to where?");
                    System.out.println("Options: square");
                    action = input.next();
                    System.out.println(" ");
                    if(action.toLowerCase().equals("square"))
                        controlling.move(action.toLowerCase());
                    else
                        System.out.println("Invalid input, dumbass!");
                }



            } else if(action.toLowerCase().equals("kill")){
                System.out.println("Who would you like " + controlling.getName() + " to kill?");
                action = input.next();
                System.out.println(" ");
                for (Person person : people) {
                    if (action.equals(person.getName())) {
                        if(person.getAreaName().equals(controlling.getAreaName())){
                            if(person.getAlive() == true){
                                if(person.getName().equals(controlling.getName())){
                                    System.out.println(person.getName() + " has committed suicide :(");
                                } else {
                                    System.out.println(controlling.getName() + " has murdered " + person.getName());
                                }
                                kill(person);
                            } else {
                                System.out.println("No need to kill " + person.getName() + ", they're already dead!");
                            }
                        } else {
                            System.out.println(person.getName() + " is not in the same room as " + controlling.getName()+"!");
                        }
                    }
                }
            } else {
                System.out.println("Invalid Input, dumbass");
            }

            System.out.println("====================================================================================");
        }


    }
    public static double randDouble(double bound1, double bound2) {
        double min = Math.min(bound1, bound2);
        double max = Math.max(bound1, bound2);
        return min + (Math.random() * (max - min));
    }

    public static void kill(Person target){
        target.death();
        for(Person person : people){
            if (controlling.equals(person)) {
                int rn = rand.nextInt(people.length);
                while (!people[rn].getAlive()) {
                    rn = rand.nextInt(people.length);
                }
                controlling = people[rn];
            }
        }
    }
}
