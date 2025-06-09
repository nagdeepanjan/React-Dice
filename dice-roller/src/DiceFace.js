import React from 'react';
import './DiceFace.css';

const DiceFace = ({ value }) => {
  const renderDots = () => {
    const dots = [];
    // Add dots based on the value.
    // This is a simple representation. More complex patterns can be implemented.
    for (let i = 0; i < value; i++) {
      dots.push(<span key={i} className="dot"></span>);
    }
    // For a real dice, we'd need specific dot placement logic here
    // or in CSS based on the face value.
    // This placeholder will just render 'value' number of dots in a row.
    return dots;
  };

  // A more structured way to handle dot patterns for a standard die:
  const getDotPattern = (val) => {
    const pattern = [];
    switch (val) {
      case 1:
        pattern.push(<span key="dot-1-middle-center" className="dot dot-middle-center"></span>);
        break;
      case 2:
        pattern.push(<span key="dot-2-top-left" className="dot dot-top-left"></span>);
        pattern.push(<span key="dot-2-bottom-right" className="dot dot-bottom-right"></span>);
        break;
      case 3:
        pattern.push(<span key="dot-3-top-left" className="dot dot-top-left"></span>);
        pattern.push(<span key="dot-3-middle-center" className="dot dot-middle-center"></span>);
        pattern.push(<span key="dot-3-bottom-right" className="dot dot-bottom-right"></span>);
        break;
      case 4:
        pattern.push(<span key="dot-4-top-left" className="dot dot-top-left"></span>);
        pattern.push(<span key="dot-4-top-right" className="dot dot-top-right"></span>);
        pattern.push(<span key="dot-4-bottom-left" className="dot dot-bottom-left"></span>);
        pattern.push(<span key="dot-4-bottom-right" className="dot dot-bottom-right"></span>);
        break;
      case 5:
        pattern.push(<span key="dot-5-top-left" className="dot dot-top-left"></span>);
        pattern.push(<span key="dot-5-top-right" className="dot dot-top-right"></span>);
        pattern.push(<span key="dot-5-middle-center" className="dot dot-middle-center"></span>);
        pattern.push(<span key="dot-5-bottom-left" className="dot dot-bottom-left"></span>);
        pattern.push(<span key="dot-5-bottom-right" className="dot dot-bottom-right"></span>);
        break;
      case 6:
        pattern.push(<span key="dot-6-top-left" className="dot dot-top-left"></span>);
        pattern.push(<span key="dot-6-top-right" className="dot dot-top-right"></span>);
        pattern.push(<span key="dot-6-middle-left" className="dot dot-middle-left"></span>);
        pattern.push(<span key="dot-6-middle-right" className="dot dot-middle-right"></span>);
        pattern.push(<span key="dot-6-bottom-left" className="dot dot-bottom-left"></span>);
        pattern.push(<span key="dot-6-bottom-right" className="dot dot-bottom-right"></span>);
        break;
      default:
        // Should not happen for a standard die
        break;
    }
    return pattern;
  };

  return (
    <div className={`dice-face face-${value}`} data-testid={`dice-face-${value}`}>
      {getDotPattern(value)}
    </div>
  );
};

export default DiceFace;
