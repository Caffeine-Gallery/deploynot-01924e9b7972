import Nat "mo:base/Nat";
import Text "mo:base/Text";

actor {
  var counter : Nat = 0;

  public func increment() : async Nat {
    counter += 1;
    return counter;
  };

  public query func getCounter() : async Nat {
    return counter;
  };

  public func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };
}
