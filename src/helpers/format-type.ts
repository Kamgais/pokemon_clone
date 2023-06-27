const formatType = (type: string): string => {
	let color: string;

	switch (type) {
    case 'Feuer': 
    	color = 'red lighten-1'; 
    	break; 
    case 'Wasser': 
    	color = 'blue lighten-1'; 
    	break; 
    case 'Pflanze': 
    	color = 'green lighten-1'; 
    	break; 
    case 'Insekt': 
    	color = 'brown lighten-1'; 
    	break; 
    case 'Normal': 
    	color = 'grey lighten-3'; 
    	break; 
    case 'Flug': 
    	color = 'blue lighten-3'; 
    	break; 
    case 'Gift': 
    	color = 'deep-purple accent-1'; 
    	break; 
    case 'Baum': 
    	color = 'pink lighten-4'; 
    	break; 
    case 'Psy': 
    	color = 'deep-purple darken-2'; 
    	break; 
    case 'Electrik': 
    	color = 'lime accent-1'; 
    	break; 
    case 'Kampf': 
    	color = 'deep-orange'; 
    	break; 
    default: 
    	color = 'grey'; 
    	break; 
	}

	return `chip ${color}`;
}

export default formatType;