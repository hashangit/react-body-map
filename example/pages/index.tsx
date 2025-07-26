import React, { useState } from "react";
import { Body, BodyPart, Slug } from "react-body-map";

// --- Helper Functions and Data ---
const friendlyNameMap: Record<Slug, string> = {
    'abs-lower': 'Lower Abs',
    'abs-middle': 'Middle Abs',
    'abs-upper': 'Upper Abs',
    'adductors-left': 'Left Adductors',
    'adductors-left-back': 'Left Adductors (Back)',
    'adductors-left-front': 'Left Adductors (Front)',
    'adductors-right': 'Right Adductors',
    'adductors-right-back': 'Right Adductors (Back)',
    'adductors-right-front': 'Right Adductors (Front)',
    'ankles-left': 'Left Ankle',
    'ankles-left-back': 'Left Ankle (Back)',
    'ankles-left-front': 'Left Ankle (Front)',
    'ankles-right': 'Right Ankle',
    'ankles-right-back': 'Right Ankle (Back)',
    'ankles-right-front': 'Right Ankle (Front)',
    'biceps-left': 'Left Biceps',
    'biceps-right': 'Right Biceps',
    'calves-left': 'Left Calves',
    'calves-left-back': 'Left Calves (Back)',
    'calves-left-front': 'Left Calves (Front)',
    'calves-right': 'Right Calves',
    'calves-right-back': 'Right Calves (Back)',
    'calves-right-front': 'Right Calves (Front)',
    'chest-left': 'Left Chest',
    'chest-right': 'Right Chest',
    'deltoids-left-back': 'Left Deltoids (Back)',
    'deltoids-left-front': 'Left Deltoids (Front)',
    'deltoids-right-back': 'Right Deltoids (Back)',
    'deltoids-right-front': 'Right Deltoids (Front)',
    'feet-left': 'Left Foot',
    'feet-left-back': 'Left Foot (Back)',
    'feet-left-front': 'Left Foot (Front)',
    'feet-right': 'Right Foot',
    'feet-right-back': 'Right Foot (Back)',
    'feet-right-front': 'Right Foot (Front)',
    'forearm-left': 'Left Forearm',
    'forearm-left-back': 'Left Forearm (Back)',
    'forearm-left-front': 'Left Forearm (Front)',
    'forearm-right': 'Right Forearm',
    'forearm-right-back': 'Right Forearm (Back)',
    'forearm-right-front': 'Right Forearm (Front)',
    'gluteal-left': 'Left Glutes',
    'gluteal-right': 'Right Glutes',
    'hamstring-left': 'Left Hamstring',
    'hamstring-right': 'Right Hamstring',
    'hands-left': 'Left Hand',
    'hands-left-back': 'Left Hand (Back)',
    'hands-left-front': 'Left Hand (Front)',
    'hands-right': 'Right Hand',
    'hands-right-back': 'Right Hand (Back)',
    'hands-right-front': 'Right Hand (Front)',
    'head-back': 'Head (Back)',
    'head-front': 'Head (Front)',
    'hips-left': 'Left Hips',
    'hips-right': 'Right Hips',
    'knees-left': 'Left Knee',
    'knees-right': 'Right Knee',
    'lower-back-left': 'Left Lower Back',
    'lower-back-right': 'Right Lower Back',
    'neck-front': 'Neck (Front)',
    'neck-left-back': 'Left Neck (Back)',
    'neck-left-front': 'Left Neck (Front)',
    'neck-right-back': 'Right Neck (Back)',
    'neck-right-front': 'Right Neck (Front)',
    'obliques-left': 'Left Obliques',
    'obliques-right': 'Right Obliques',
    'quadriceps-left': 'Left Quadriceps',
    'quadriceps-right': 'Right Quadriceps',
    'tibialis-left': 'Left Tibialis',
    'tibialis-right': 'Right Tibialis',
    'trapezius-left-back': 'Left Trapezius (Back)',
    'trapezius-left-front': 'Left Trapezius (Front)',
    'trapezius-right-back': 'Right Trapezius (Back)',
    'trapezius-right-front': 'Right Trapezius (Front)',
    'triceps-left': 'Left Triceps',
    'triceps-left-back': 'Left Triceps (Back)',
    'triceps-left-front': 'Left Triceps (Front)',
    'triceps-right': 'Right Triceps',
    'triceps-right-back': 'Right Triceps (Back)',
    'triceps-right-front': 'Right Triceps (Front)',
    'upper-back-left': 'Left Upper Back',
    'upper-back-right': 'Right Upper Back',
};

// --- Interfaces and Types ---
interface Note {
  text: string;
  timestamp: string;
}

interface ExtendedBodyPart extends BodyPart {
  notes: Note[];
}

// --- React Components ---

const NoteCard = ({ part, onAddNote, onIntensityChange, colors }: { part: ExtendedBodyPart, onAddNote: (slug: Slug, note: string) => void, onIntensityChange: (slug: Slug, intensity: number) => void, colors: string[] }) => {
    const [newNote, setNewNote] = useState("");
  
    const handleAddClick = () => {
      if (newNote.trim()) {
        onAddNote(part.slug, newNote.trim());
        setNewNote("");
      }
    };
  
    return (
      <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '15px', margin: '10px', minWidth: '300px', background: 'white', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <h3 style={{ marginTop: 0, borderBottom: '1px solid #eee', paddingBottom: '10px' }}>{friendlyNameMap[part.slug]}</h3>
        
        <div style={{ margin: '10px 0' }}>
            <strong>Intensity:</strong>
            <div style={{ display: 'flex', gap: '5px', marginTop: '5px' }}>
                {colors.map((color, index) => (
                    <button 
                        key={index} 
                        onClick={() => onIntensityChange(part.slug, index + 1)} 
                        style={{ 
                            width: '30px', 
                            height: '30px', 
                            backgroundColor: color, 
                            border: part.intensity === index + 1 ? '3px solid #333' : '1px solid #ccc',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            transition: 'transform 0.2s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                ))}
            </div>
        </div>

        <div style={{ maxHeight: '150px', overflowY: 'auto', marginBottom: '15px' }}>
          {part.notes.length > 0 ? (
            part.notes.slice().reverse().map((note, index) => (
              <div key={index} style={{ borderBottom: '1px solid #f0f0f0', padding: '8px 0' }}>
                <p style={{ margin: 0 }}>{note.text}</p>
                <small style={{ color: '#888' }}>{note.timestamp}</small>
              </div>
            ))
          ) : (
            <p>No notes yet.</p>
          )}
        </div>
        <div>
          <textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Add a new note..."
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', minHeight: '60px', boxSizing: 'border-box' }}
          />
          <button onClick={handleAddClick} style={{ marginTop: '10px', padding: '8px 15px', border: 'none', background: '#007bff', color: 'white', borderRadius: '4px', cursor: 'pointer' }}>Add Note</button>
        </div>
      </div>
    );
  };

const App = () => {
  const [selectedParts, setSelectedParts] = useState<ExtendedBodyPart[]>([]);
  const [side, setSide] = useState<'front' | 'back'>('front');
  const [scale, setScale] = useState(1);
  const intensityColors = ['#5db8f5', '#0eac0e', '#e6c327', '#f8556d'];

  const handleIntensityChange = (slug: Slug, intensity: number) => {
    setSelectedParts(prev => 
      prev.map(p => p.slug === slug ? { ...p, intensity } : p)
    );
  };
  
  const onBodyPartPress = (bodyPart: BodyPart) => {
    setSelectedParts(currentParts => {
        const partIndex = currentParts.findIndex(p => p.slug === bodyPart.slug);
        if (partIndex > -1) {
            return currentParts.filter(p => p.slug !== bodyPart.slug);
        } else {
            return [...currentParts, { ...bodyPart, intensity: 1, notes: [] }];
        }
    });
  };

  const handleAddNote = (slug: Slug, text: string) => {
    const newNote: Note = {
      text,
      timestamp: new Date().toLocaleString(),
    };
    setSelectedParts(prev => prev.map(p => p.slug === slug ? { ...p, notes: [...p.notes, newNote] } : p));
  };

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#f0f2f5', fontFamily: 'sans-serif' }}>
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <h1 style={{color: '#333'}}>react-body-map Example</h1>
        <div style={{ marginBottom: '20px', display: 'flex', gap: '20px', alignItems: 'center', background: 'white', padding: '10px 20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <button onClick={() => setSide(s => s === 'front' ? 'back' : 'front')}>Toggle Side</button>
          <label>Scale: <input type="range" min="0.5" max="2" step="0.1" value={scale} onChange={(e) => setScale(parseFloat(e.target.value))} /></label>
        </div>
        
        <div style={{position: 'relative'}}>
            <Body
              data={selectedParts}
              onBodyPartPress={onBodyPartPress}
              side={side}
              scale={scale}
              frontOnly={false}
              backOnly={false}
              colors={intensityColors}
            />
        </div>

      </div>

      <div style={{ width: '400px', background: '#e9ecef', padding: '20px', overflowY: 'auto' }}>
        <h2>Selected Parts Notes</h2>
        {selectedParts.length > 0 ? (
          <div style={{ display: 'flex', overflowX: 'auto' }}>
            {selectedParts.map(part => (
              <NoteCard 
                key={part.slug} 
                part={part} 
                onAddNote={handleAddNote} 
                onIntensityChange={handleIntensityChange}
                colors={intensityColors}
                />
            ))}
          </div>
        ) : (
          <p>Click a body part to select it.</p>
        )}
      </div>
    </div>
  );
};

export default App; 