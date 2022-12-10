import { useRef, useState, useEffect } from 'react'
import { createBacklash } from 'use-backlash'

export { ActionMap, Command, Effect, UpdateMap } from 'use-backlash'
export const useBacklash = createBacklash({ useRef, useState, useEffect })
