import type { ConfirmDialogChoice, ConfirmDialogLabel, ErrorDialogData } from '~/types'
import { STORAGE_KEY_FIRST_VISIT } from '~/constants'

export const confirmDialogChoice = ref<ConfirmDialogChoice>()
export const confirmDialogLabel = ref<ConfirmDialogLabel>()
export const errorDialogData = ref<ErrorDialogData>()

export const commandPanelInput = ref('')

export const isFirstVisit = useLocalStorage(STORAGE_KEY_FIRST_VISIT, true)

export const isKeyboardShortcutsDialogOpen = ref(false)
export const isPreviewHelpOpen = ref(isFirstVisit.value)
export const isCommandPanelOpen = ref(false)
export const isConfirmDialogOpen = ref(false)
export const isErrorDialogOpen = ref(false)
export const isIntroDialogOpen = ref(false)

export async function openConfirmDialog(label: ConfirmDialogLabel | string): Promise<ConfirmDialogChoice> {
  confirmDialogLabel.value = typeof label === 'string' ? { title: label } : label
  confirmDialogChoice.value = undefined
  isConfirmDialogOpen.value = true

  await until(isConfirmDialogOpen).toBe(false)

  return confirmDialogChoice.value!
}

if (isPreviewHelpOpen.value) {
  watch(isPreviewHelpOpen, () => {
    isFirstVisit.value = false
  })
}

export async function openErrorDialog(data: ErrorDialogData) {
  errorDialogData.value = data
  isErrorDialogOpen.value = true

  await until(isErrorDialogOpen).toBe(false)
}

export function closeErrorDialog() {
  isErrorDialogOpen.value = false
}

export function closeMediaPreview() {
  history.back()
}

export function openPreviewHelp() {
  isPreviewHelpOpen.value = true
}

export function closePreviewHelp() {
  isPreviewHelpOpen.value = false
}

export function openCommandPanel(isCommandMode = false) {
  commandPanelInput.value = isCommandMode ? '> ' : ''
  isCommandPanelOpen.value = true
}

export function closeCommandPanel() {
  isCommandPanelOpen.value = false
}

export function toggleKeyboardShortcuts() {
  isKeyboardShortcutsDialogOpen.value = !isKeyboardShortcutsDialogOpen.value
}

export function closeKeyboardShortcuts() {
  isKeyboardShortcutsDialogOpen.value = false
}

export function openIntroDialog() {
  isIntroDialogOpen.value = true
}
