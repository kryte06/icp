import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Text "mo:base/Text";

actor Socials {
  var eventCount = 1;
  var eventId = 1;

  public func create() {
    eventCount += 1;
    Debug.print(debug_show(eventCount));
  };
  public func joinEvent(names : Text) : async Text {
    eventId += 1;
    let joinee = names # " " # Nat.toText(eventId);
    return joinee;
  };
  public func getEventCount(): async Nat{
    return eventCount;
  };
}