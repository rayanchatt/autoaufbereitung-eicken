// calculator.cpp (C++ WebAssembly Logic for Fahrzeugpflege-Kalkulator)
#include <emscripten/bind.h>
#include <string>

using namespace emscripten;

float calculatePrice(bool isSUV, bool handwash, bool interior, bool leather, bool alcantara,
                     bool tireshine, bool glassseal, bool polish, bool polish2, bool polish3, bool ceramic) {

    float total = 0.0f;

    // Reinigung
    total += 60.0f; // Grundgebühr
    if (isSUV) total += 15.0f;
    if (handwash) total += 20.0f;
    if (interior) total += 30.0f;
    if (leather) total += 20.0f;
    if (alcantara) total += 20.0f;

    // Aufbereitung
    if (tireshine) total += 5.0f;
    if (glassseal) total += 25.0f;

    // Handwäsche notwendig für folgende Leistungen
    if (handwash) {
        if (polish) total += 95.0f;
        if (polish2) total += 180.0f;
        if (polish3) total += 250.0f;
    }
    else {
        if (polish || polish2 || polish3) {
            return -1.0f; // Fehlercode für "Handwäsche erforderlich"
        }
    }

    if (ceramic) total += 500.0f;

    return total;
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("calculatePrice", &calculatePrice);
}
