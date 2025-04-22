
#include <emscripten/bind.h>
using namespace emscripten;

float calculatePrice(
  bool suv, bool handwash, bool interior,
  bool leather, bool alcantara, bool tireshine,
  bool glassseal, bool polish, bool polish2,
  bool polish3, bool ceramic
) {
  float price = 60.0f; // Grundgebühr

  if (handwash) price += 20.0f;
  if (suv) price += 15.0f;
  if (interior) price += 30.0f;
  if (leather) price += 20.0f;
  if (alcantara) price += 20.0f;
  if (tireshine) price += 5.0f;
  if (glassseal) price += 25.0f;

  // Aufbereitung nur mit Handwäsche
  if (!handwash && (polish || polish2 || polish3 || ceramic)) {
    return -1.0f; // Fehlercode: nicht erlaubt ohne Handwäsche
  }

  if (polish) price += 95.0f;
  if (polish2) price += 180.0f;
  if (polish3) price += 250.0f;
  if (ceramic) price += 500.0f;

  return price;
}

EMSCRIPTEN_BINDINGS(my_module) {
  function("calculatePrice", &calculatePrice);
}
