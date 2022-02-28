(ns monkeys.core
  (:require reagent.dom
            [reagent.core :as r]))

(comment
  (def use-websocket js/useWebSocket)
  (def ws js/ws)
  (def use-body-bounderies js/useBodyBounderies)
  (def player-moves js/playerMoves)
  (def use-event-listener js/useEventListener)
  (def monkeys (r/adapt-react-class js/Monkeys))
  (def score (r/adapt-react-class js/Score))
  (def dialog (r/adapt-react-class js/Dialog))
  (def exceptions (r/adapt-react-class js/Exceptions))

  ;; uncomment when rewriting app component
  (defn app []
    (let [body-bounderies (use-body-bounderies)
          player-moves (player-moves)])))

(defn ^:export init []
  (reagent.dom/render [(r/adapt-react-class js/App)] (.-body js/document)))

