var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShoppingList = function (_React$Component) {
  _inherits(ShoppingList, _React$Component);

  function ShoppingList() {
    _classCallCheck(this, ShoppingList);

    return _possibleConstructorReturn(this, (ShoppingList.__proto__ || Object.getPrototypeOf(ShoppingList)).apply(this, arguments));
  }

  _createClass(ShoppingList, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "shopping-list" },
        React.createElement(
          "h1",
          null,
          "Shopping List for ",
          this.props.name
        ),
        React.createElement(
          "ul",
          null,
          React.createElement(
            "li",
            null,
            "Instagram"
          ),
          React.createElement(
            "li",
            null,
            "WhatsApp"
          ),
          React.createElement(
            "li",
            null,
            "Oculus"
          )
        )
      );
    }
  }]);

  return ShoppingList;
}(React.Component);

var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(ShoppingList, { name: "Mark" }));