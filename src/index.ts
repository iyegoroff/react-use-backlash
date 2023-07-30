import { useRef, useState, useEffect, useLayoutEffect } from 'react'
import { createBacklash } from 'use-backlash'

export { ActionMap, Command, Effect, UpdateMap } from 'use-backlash'
export const useBacklash = createBacklash({ useRef, useState, useEffect, useLayoutEffect })
