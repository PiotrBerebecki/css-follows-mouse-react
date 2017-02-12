'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.clear();

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
    _this.setImageCenter = _this.setImageCenter.bind(_this);

    _this.state = {
      rotation: 0,
      xCenter: null,
      yCenter: null
    };
    return _this;
  }

  App.prototype.componentDidMount = function componentDidMount() {
    this.setImageCenter();
    window.addEventListener('resize', this.setImageCenter);
  };

  App.prototype.setImageCenter = function setImageCenter() {
    var image = this.refs.image;

    this.setState({
      xCenter: image.offsetLeft + image.offsetWidth / 2,
      yCenter: image.offsetTop + image.offsetHeight / 2
    });
  };

  App.prototype.handleMouseMove = function handleMouseMove(event) {
    var e = event.nativeEvent;
    var target = e.target;

    var xMouse = e.offsetX;
    var yMouse = e.offsetY;

    if (target.className !== 'hero') {
      var _ref = [xMouse + target.offsetLeft, yMouse + target.offsetTop];
      xMouse = _ref[0];
      yMouse = _ref[1];
    }

    var xDelta = xMouse - this.state.xCenter;
    var yDelta = yMouse - this.state.yCenter;

    var rad = Math.atan2(xDelta, yDelta);
    var deg = -1 * (rad * (180 / Math.PI));
    this.setState({
      rotation: deg
    });
  };

  App.prototype.render = function render() {
    return React.createElement(
      'div',
      { className: 'hero', onMouseMove: this.handleMouseMove },
      React.createElement(
        'div',
        { className: 'wrapper' },
        React.createElement(
          'h1',
          null,
          'React'
        ),
        React.createElement('img', { style: { transform: 'rotate(' + this.state.rotation + 'deg' },
          ref: 'image',
          src: './images/react-logo-transparent.png' })
      )
    );
  };

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
