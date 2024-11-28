import { useEffect } from 'react'

export const useTitle = (title) => {
    useEffect(()=>{

    document.title=`${title}-NorZah codeBook`
    },[title])
  return null;
}

